
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBoxMultiple from "../../src/components/MdiAccountBoxMultiple.vue";

test("MdiAccountBoxMultiple snapshot", () => {
  const wrapper = mount(MdiAccountBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
