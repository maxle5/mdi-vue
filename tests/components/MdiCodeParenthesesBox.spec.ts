
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeParenthesesBox from "../../src/components/MdiCodeParenthesesBox.vue";

test("MdiCodeParenthesesBox snapshot", () => {
  const wrapper = mount(MdiCodeParenthesesBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
