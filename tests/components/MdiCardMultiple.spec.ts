
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardMultiple from "../../src/components/MdiCardMultiple.vue";

test("MdiCardMultiple snapshot", () => {
  const wrapper = mount(MdiCardMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
