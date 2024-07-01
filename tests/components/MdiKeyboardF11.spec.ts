
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF11 from "../../src/components/MdiKeyboardF11.vue";

test("MdiKeyboardF11 snapshot", () => {
  const wrapper = mount(MdiKeyboardF11, {});
  expect(wrapper.html()).toMatchSnapshot();
});
