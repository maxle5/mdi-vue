
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressQuestion from "../../src/components/MdiProgressQuestion.vue";

test("MdiProgressQuestion snapshot", () => {
  const wrapper = mount(MdiProgressQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
