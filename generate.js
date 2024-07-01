import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { XMLParser } from "fast-xml-parser";
import { rimraf } from "rimraf";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const template = `
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="{{path}}" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "{{name}}",
      props: {
          size: { 
              type: Number, 
              default: 24 
          },
          viewbox: {
              type: String, 
              default: "0 0 24 24" 
          },
      },
  })
  </script>
`;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

const getIconName = (file) =>
  "Mdi" +
  file
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("")
    .replace(".svg", "");

// refresh components folder
await rimraf(resolve(__dirname, "src/components"));
await mkdir(resolve(__dirname, "src/components"));

// generate vue components from mdi svg files
const files = await readdir(resolve(__dirname, "node_modules/@mdi/svg/svg"));
for (const file of files) {
  var svgContent = await readFile(
    resolve(__dirname, "node_modules/@mdi/svg/svg", file),
    "utf-8"
  );

  const iconName = getIconName(file);
  const iconPath = parser.parse(svgContent).svg.path["@_d"];

  await writeFile(
    resolve(__dirname, "src/components", iconName + ".vue"),
    template.replace("{{path}}", iconPath).replace("{{name}}", iconName)
  );
}

// generate main.ts file
const imports = files
  .map((file) => {
    const iconName = getIconName(file);
    return `import ${iconName} from './components/${iconName}.vue';`;
  })
  .sort()
  .join("\n");

var exports = files
  .map((file) => {
    const iconName = getIconName(file);
    return `	${iconName},`;
  })
  .sort()
  .join("\n");

await writeFile(
  resolve(__dirname, "src/index.ts"),
  `${imports}

export {
${exports.slice(0, -1)}
};
  `
);
