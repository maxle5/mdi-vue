
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHorizontalAlignLeft from "../../src/components/MdiFormatHorizontalAlignLeft.vue";

test("MdiFormatHorizontalAlignLeft snapshot", () => {
  const wrapper = mount(MdiFormatHorizontalAlignLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
