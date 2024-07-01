
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardClose from "../../src/components/MdiKeyboardClose.vue";

test("MdiKeyboardClose snapshot", () => {
  const wrapper = mount(MdiKeyboardClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
