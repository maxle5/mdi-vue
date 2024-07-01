
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric2Circle from "../../src/components/MdiNumeric2Circle.vue";

test("MdiNumeric2Circle snapshot", () => {
  const wrapper = mount(MdiNumeric2Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
