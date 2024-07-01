
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF4 from "../../src/components/MdiKeyboardF4.vue";

test("MdiKeyboardF4 snapshot", () => {
  const wrapper = mount(MdiKeyboardF4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
