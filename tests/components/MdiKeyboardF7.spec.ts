
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF7 from "../../src/components/MdiKeyboardF7.vue";

test("MdiKeyboardF7 snapshot", () => {
  const wrapper = mount(MdiKeyboardF7, {});
  expect(wrapper.html()).toMatchSnapshot();
});
