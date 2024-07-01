
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric6BoxMultiple from "../../src/components/MdiNumeric6BoxMultiple.vue";

test("MdiNumeric6BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric6BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
