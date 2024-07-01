
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric7Circle from "../../src/components/MdiNumeric7Circle.vue";

test("MdiNumeric7Circle snapshot", () => {
  const wrapper = mount(MdiNumeric7Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
