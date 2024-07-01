
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardCaps from "../../src/components/MdiKeyboardCaps.vue";

test("MdiKeyboardCaps snapshot", () => {
  const wrapper = mount(MdiKeyboardCaps, {});
  expect(wrapper.html()).toMatchSnapshot();
});
