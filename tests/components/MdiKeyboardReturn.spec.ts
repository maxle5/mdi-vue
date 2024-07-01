
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardReturn from "../../src/components/MdiKeyboardReturn.vue";

test("MdiKeyboardReturn snapshot", () => {
  const wrapper = mount(MdiKeyboardReturn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
