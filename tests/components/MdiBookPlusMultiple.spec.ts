
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookPlusMultiple from "../../src/components/MdiBookPlusMultiple.vue";

test("MdiBookPlusMultiple snapshot", () => {
  const wrapper = mount(MdiBookPlusMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
