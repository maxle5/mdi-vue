
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric3Circle from "../../src/components/MdiNumeric3Circle.vue";

test("MdiNumeric3Circle snapshot", () => {
  const wrapper = mount(MdiNumeric3Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
