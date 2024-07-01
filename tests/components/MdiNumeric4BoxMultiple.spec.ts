
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric4BoxMultiple from "../../src/components/MdiNumeric4BoxMultiple.vue";

test("MdiNumeric4BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric4BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
