
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF6 from "../../src/components/MdiKeyboardF6.vue";

test("MdiKeyboardF6 snapshot", () => {
  const wrapper = mount(MdiKeyboardF6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
