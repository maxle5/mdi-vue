
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric10BoxMultiple from "../../src/components/MdiNumeric10BoxMultiple.vue";

test("MdiNumeric10BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric10BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
