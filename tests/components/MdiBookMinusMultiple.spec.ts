
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMinusMultiple from "../../src/components/MdiBookMinusMultiple.vue";

test("MdiBookMinusMultiple snapshot", () => {
  const wrapper = mount(MdiBookMinusMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
