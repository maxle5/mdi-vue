
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF8 from "../../src/components/MdiKeyboardF8.vue";

test("MdiKeyboardF8 snapshot", () => {
  const wrapper = mount(MdiKeyboardF8, {});
  expect(wrapper.html()).toMatchSnapshot();
});
