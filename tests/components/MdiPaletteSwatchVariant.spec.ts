
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaletteSwatchVariant from "../../src/components/MdiPaletteSwatchVariant.vue";

test("MdiPaletteSwatchVariant snapshot", () => {
  const wrapper = mount(MdiPaletteSwatchVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
