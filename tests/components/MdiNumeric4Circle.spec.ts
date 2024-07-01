
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric4Circle from "../../src/components/MdiNumeric4Circle.vue";

test("MdiNumeric4Circle snapshot", () => {
  const wrapper = mount(MdiNumeric4Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
