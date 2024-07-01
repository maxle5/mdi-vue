
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusBoxMultiple from "../../src/components/MdiMinusBoxMultiple.vue";

test("MdiMinusBoxMultiple snapshot", () => {
  const wrapper = mount(MdiMinusBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
