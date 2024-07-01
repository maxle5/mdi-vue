
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric2BoxMultiple from "../../src/components/MdiNumeric2BoxMultiple.vue";

test("MdiNumeric2BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric2BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
