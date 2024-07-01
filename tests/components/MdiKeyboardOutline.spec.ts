
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardOutline from "../../src/components/MdiKeyboardOutline.vue";

test("MdiKeyboardOutline snapshot", () => {
  const wrapper = mount(MdiKeyboardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
