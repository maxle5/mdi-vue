import { mkdir, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { rimraf } from "rimraf";
import mdiIcons from "@mdi/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const componentTemplate = `
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
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
          }
      },
  })
</script>
`;
const testTemplate = `
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import {{name}} from "../../src/components/{{name}}.vue";

test("{{name}} snapshot", () => {
  const wrapper = mount({{name}}, {});
  expect(wrapper.html()).toMatchSnapshot();
});
`;

// refresh components
await rimraf(resolve(__dirname, "src/components"));
await mkdir(resolve(__dirname, "src/components"));

// generate vue components from mdi js paths
const icons = Object.entries(mdiIcons).map(([name, path]) => ({
  path,
  name: name[0].toUpperCase() + name.slice(1), // PascalCase
}));

for (const icon of icons) {
  await writeFile(
    resolve(__dirname, "src/components", icon.name + ".vue"),
    componentTemplate
      .replace(/{{path}}/g, icon.path)
      .replace(/{{name}}/g, icon.name)
  );

  await writeFile(
    resolve(__dirname, "tests/components", icon.name + ".spec.ts"),
    testTemplate.replace(/{{name}}/g, icon.name)
  );
}

// generate main.ts file
const main = icons
  .map(
    (icon) =>
      `export { default as ${icon.name} } from './components/${icon.name}.vue';`
  )
  .sort()
  .join("\n");

await writeFile(resolve(__dirname, "src/index.ts"), main);
