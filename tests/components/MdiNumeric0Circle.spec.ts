
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric0Circle from "../../src/components/MdiNumeric0Circle.vue";

test("MdiNumeric0Circle snapshot", () => {
  const wrapper = mount(MdiNumeric0Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
