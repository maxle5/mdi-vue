
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatIndentDecrease from "../../src/components/MdiFormatIndentDecrease.vue";

test("MdiFormatIndentDecrease snapshot", () => {
  const wrapper = mount(MdiFormatIndentDecrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
