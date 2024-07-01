
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF9 from "../../src/components/MdiKeyboardF9.vue";

test("MdiKeyboardF9 snapshot", () => {
  const wrapper = mount(MdiKeyboardF9, {});
  expect(wrapper.html()).toMatchSnapshot();
});
