
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric6Circle from "../../src/components/MdiNumeric6Circle.vue";

test("MdiNumeric6Circle snapshot", () => {
  const wrapper = mount(MdiNumeric6Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
