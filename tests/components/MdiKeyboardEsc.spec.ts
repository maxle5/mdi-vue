
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardEsc from "../../src/components/MdiKeyboardEsc.vue";

test("MdiKeyboardEsc snapshot", () => {
  const wrapper = mount(MdiKeyboardEsc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
