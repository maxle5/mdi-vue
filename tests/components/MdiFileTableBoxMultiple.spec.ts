
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileTableBoxMultiple from "../../src/components/MdiFileTableBoxMultiple.vue";

test("MdiFileTableBoxMultiple snapshot", () => {
  const wrapper = mount(MdiFileTableBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
