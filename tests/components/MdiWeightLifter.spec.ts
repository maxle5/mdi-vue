
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeightLifter from "../../src/components/MdiWeightLifter.vue";

test("MdiWeightLifter snapshot", () => {
  const wrapper = mount(MdiWeightLifter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
