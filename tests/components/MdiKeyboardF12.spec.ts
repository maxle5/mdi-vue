
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF12 from "../../src/components/MdiKeyboardF12.vue";

test("MdiKeyboardF12 snapshot", () => {
  const wrapper = mount(MdiKeyboardF12, {});
  expect(wrapper.html()).toMatchSnapshot();
});
