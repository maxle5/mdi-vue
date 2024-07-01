
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatFontSizeIncrease from "../../src/components/MdiFormatFontSizeIncrease.vue";

test("MdiFormatFontSizeIncrease snapshot", () => {
  const wrapper = mount(MdiFormatFontSizeIncrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
