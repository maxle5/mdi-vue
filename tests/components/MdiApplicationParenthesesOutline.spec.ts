
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationParenthesesOutline from "../../src/components/MdiApplicationParenthesesOutline.vue";

test("MdiApplicationParenthesesOutline snapshot", () => {
  const wrapper = mount(MdiApplicationParenthesesOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
