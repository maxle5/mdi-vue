
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric1BoxMultiple from "../../src/components/MdiNumeric1BoxMultiple.vue";

test("MdiNumeric1BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric1BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
