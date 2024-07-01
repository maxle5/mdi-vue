
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeParentheses from "../../src/components/MdiCodeParentheses.vue";

test("MdiCodeParentheses snapshot", () => {
  const wrapper = mount(MdiCodeParentheses, {});
  expect(wrapper.html()).toMatchSnapshot();
});
