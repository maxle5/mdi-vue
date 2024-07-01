
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleMultiple from "../../src/components/MdiCircleMultiple.vue";

test("MdiCircleMultiple snapshot", () => {
  const wrapper = mount(MdiCircleMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
