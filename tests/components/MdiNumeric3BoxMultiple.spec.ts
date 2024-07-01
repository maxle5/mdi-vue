
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric3BoxMultiple from "../../src/components/MdiNumeric3BoxMultiple.vue";

test("MdiNumeric3BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric3BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
