
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric5BoxMultiple from "../../src/components/MdiNumeric5BoxMultiple.vue";

test("MdiNumeric5BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric5BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
