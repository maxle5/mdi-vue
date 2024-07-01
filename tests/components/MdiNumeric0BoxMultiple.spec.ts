
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric0BoxMultiple from "../../src/components/MdiNumeric0BoxMultiple.vue";

test("MdiNumeric0BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric0BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
