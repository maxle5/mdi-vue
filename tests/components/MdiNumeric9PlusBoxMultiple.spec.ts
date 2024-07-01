
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9PlusBoxMultiple from "../../src/components/MdiNumeric9PlusBoxMultiple.vue";

test("MdiNumeric9PlusBoxMultiple snapshot", () => {
  const wrapper = mount(MdiNumeric9PlusBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
