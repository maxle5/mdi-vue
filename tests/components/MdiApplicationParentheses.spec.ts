
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationParentheses from "../../src/components/MdiApplicationParentheses.vue";

test("MdiApplicationParentheses snapshot", () => {
  const wrapper = mount(MdiApplicationParentheses, {});
  expect(wrapper.html()).toMatchSnapshot();
});
