
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaletteSwatchOutline from "../../src/components/MdiPaletteSwatchOutline.vue";

test("MdiPaletteSwatchOutline snapshot", () => {
  const wrapper = mount(MdiPaletteSwatchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
