
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatIndentIncrease from "../../src/components/MdiFormatIndentIncrease.vue";

test("MdiFormatIndentIncrease snapshot", () => {
  const wrapper = mount(MdiFormatIndentIncrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
