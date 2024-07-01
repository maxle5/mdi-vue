
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaletteOutline from "../../src/components/MdiPaletteOutline.vue";

test("MdiPaletteOutline snapshot", () => {
  const wrapper = mount(MdiPaletteOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
