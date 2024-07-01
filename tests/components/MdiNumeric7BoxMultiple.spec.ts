
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric7BoxMultiple from "../../src/components/MdiNumeric7BoxMultiple.vue";

test("MdiNumeric7BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric7BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
