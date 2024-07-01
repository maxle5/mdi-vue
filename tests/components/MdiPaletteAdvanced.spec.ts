
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaletteAdvanced from "../../src/components/MdiPaletteAdvanced.vue";

test("MdiPaletteAdvanced snapshot", () => {
  const wrapper = mount(MdiPaletteAdvanced, {});
  expect(wrapper.html()).toMatchSnapshot();
});
