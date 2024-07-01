
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHorizontalAlignRight from "../../src/components/MdiFormatHorizontalAlignRight.vue";

test("MdiFormatHorizontalAlignRight snapshot", () => {
  const wrapper = mount(MdiFormatHorizontalAlignRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
