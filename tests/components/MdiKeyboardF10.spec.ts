
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF10 from "../../src/components/MdiKeyboardF10.vue";

test("MdiKeyboardF10 snapshot", () => {
  const wrapper = mount(MdiKeyboardF10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
