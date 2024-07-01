
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLineHeight from "../../src/components/MdiFormatLineHeight.vue";

test("MdiFormatLineHeight snapshot", () => {
  const wrapper = mount(MdiFormatLineHeight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
