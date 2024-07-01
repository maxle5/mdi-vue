
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9Circle from "../../src/components/MdiNumeric9Circle.vue";

test("MdiNumeric9Circle snapshot", () => {
  const wrapper = mount(MdiNumeric9Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
