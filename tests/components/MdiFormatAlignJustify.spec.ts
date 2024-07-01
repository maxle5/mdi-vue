
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAlignJustify from "../../src/components/MdiFormatAlignJustify.vue";

test("MdiFormatAlignJustify snapshot", () => {
  const wrapper = mount(MdiFormatAlignJustify, {});
  expect(wrapper.html()).toMatchSnapshot();
});
