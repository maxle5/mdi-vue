
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardTab from "../../src/components/MdiKeyboardTab.vue";

test("MdiKeyboardTab snapshot", () => {
  const wrapper = mount(MdiKeyboardTab, {});
  expect(wrapper.html()).toMatchSnapshot();
});
