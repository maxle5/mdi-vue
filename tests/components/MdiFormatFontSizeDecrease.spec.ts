
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatFontSizeDecrease from "../../src/components/MdiFormatFontSizeDecrease.vue";

test("MdiFormatFontSizeDecrease snapshot", () => {
  const wrapper = mount(MdiFormatFontSizeDecrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
