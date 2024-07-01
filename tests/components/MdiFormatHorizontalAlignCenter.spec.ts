
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHorizontalAlignCenter from "../../src/components/MdiFormatHorizontalAlignCenter.vue";

test("MdiFormatHorizontalAlignCenter snapshot", () => {
  const wrapper = mount(MdiFormatHorizontalAlignCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
