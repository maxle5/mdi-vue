
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardOffOutline from "../../src/components/MdiKeyboardOffOutline.vue";

test("MdiKeyboardOffOutline snapshot", () => {
  const wrapper = mount(MdiKeyboardOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
