
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarMultiple from "../../src/components/MdiCarMultiple.vue";

test("MdiCarMultiple snapshot", () => {
  const wrapper = mount(MdiCarMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
