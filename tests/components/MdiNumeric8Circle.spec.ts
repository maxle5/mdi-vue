
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric8Circle from "../../src/components/MdiNumeric8Circle.vue";

test("MdiNumeric8Circle snapshot", () => {
  const wrapper = mount(MdiNumeric8Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
