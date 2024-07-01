
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardOff from "../../src/components/MdiKeyboardOff.vue";

test("MdiKeyboardOff snapshot", () => {
  const wrapper = mount(MdiKeyboardOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
