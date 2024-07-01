
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardCloseOutline from "../../src/components/MdiKeyboardCloseOutline.vue";

test("MdiKeyboardCloseOutline snapshot", () => {
  const wrapper = mount(MdiKeyboardCloseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
