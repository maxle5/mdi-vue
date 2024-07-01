
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusCircleMultiple from "../../src/components/MdiMinusCircleMultiple.vue";

test("MdiMinusCircleMultiple snapshot", () => {
  const wrapper = mount(MdiMinusCircleMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
