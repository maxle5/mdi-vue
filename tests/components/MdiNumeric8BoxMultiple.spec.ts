
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric8BoxMultiple from "../../src/components/MdiNumeric8BoxMultiple.vue";

test("MdiNumeric8BoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric8BoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
