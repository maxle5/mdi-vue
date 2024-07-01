
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF2 from "../../src/components/MdiKeyboardF2.vue";

test("MdiKeyboardF2 snapshot", () => {
  const wrapper = mount(MdiKeyboardF2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
