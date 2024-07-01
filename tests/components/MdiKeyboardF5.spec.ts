
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF5 from "../../src/components/MdiKeyboardF5.vue";

test("MdiKeyboardF5 snapshot", () => {
  const wrapper = mount(MdiKeyboardF5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
