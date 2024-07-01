
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleKeyboardShift from "../../src/components/MdiAppleKeyboardShift.vue";

test("MdiAppleKeyboardShift snapshot", () => {
  const wrapper = mount(MdiAppleKeyboardShift, {});
  expect(wrapper.html()).toMatchSnapshot();
});
