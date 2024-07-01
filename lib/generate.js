import { readdirSync, readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { XMLParser } from "fast-xml-parser";

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

// generate vue components from mdi svg files
const files = readdirSync(resolve(__dirname, "node_modules/@mdi/svg/svg"));
for (const file of files) {
  var svgContent = readFileSync(
    resolve(__dirname, "node_modules/@mdi/svg/svg", file),
    "utf-8"
  );

  const path = parser.parse(svgContent).svg.path["@_d"];
  const pascalCase = file
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("")
    .replace(".svg", "");

  writeFileSync(
    resolve(__dirname, "src/components", pascalCase + ".vue"),
    template.replace("{{path}}", path).replace("{{name}}", pascalCase)
  );
}

// generate main.ts file
const imports = files
  .map((file) => {
    const pascalCase = file
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("")
      .replace(".svg", "");

    return `import ${pascalCase} from './components/${pascalCase}.vue';`;
  })
  .sort()
  .join("\n");

var exports = files
  .map((file) => {
    const pascalCase = file
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("")
      .replace(".svg", "");

    return `	${pascalCase},`;
  })
  .sort()
  .join("\n");

writeFileSync(
  resolve(__dirname, "src/index.ts"),
  `${imports}

export {
${exports.slice(0, -1)}
};
  `
);
