
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric10Circle from "../../src/components/MdiNumeric10Circle.vue";

test("MdiNumeric10Circle snapshot", () => {
  const wrapper = mount(MdiNumeric10Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
