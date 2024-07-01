
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF3 from "../../src/components/MdiKeyboardF3.vue";

test("MdiKeyboardF3 snapshot", () => {
  const wrapper = mount(MdiKeyboardF3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
