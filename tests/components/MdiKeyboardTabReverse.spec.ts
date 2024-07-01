
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardTabReverse from "../../src/components/MdiKeyboardTabReverse.vue";

test("MdiKeyboardTabReverse snapshot", () => {
  const wrapper = mount(MdiKeyboardTabReverse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
