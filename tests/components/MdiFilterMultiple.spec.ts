
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterMultiple from "../../src/components/MdiFilterMultiple.vue";

test("MdiFilterMultiple snapshot", () => {
  const wrapper = mount(MdiFilterMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
