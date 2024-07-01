
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric5Circle from "../../src/components/MdiNumeric5Circle.vue";

test("MdiNumeric5Circle snapshot", () => {
  const wrapper = mount(MdiNumeric5Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
