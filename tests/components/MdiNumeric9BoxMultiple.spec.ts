
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9BoxMultiple from "../../src/components/MdiNumeric9BoxMultiple.vue";

test("MdiNumeric9BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric9BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
