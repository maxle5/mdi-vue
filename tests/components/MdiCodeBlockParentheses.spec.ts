
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeBlockParentheses from "../../src/components/MdiCodeBlockParentheses.vue";

test("MdiCodeBlockParentheses snapshot", () => {
  const wrapper = mount(MdiCodeBlockParentheses, {});
  expect(wrapper.html()).toMatchSnapshot();
});
