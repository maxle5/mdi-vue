
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBoxMultiple from "../../src/components/MdiChartBoxMultiple.vue";

test("MdiChartBoxMultiple snapshot", () => {
  const wrapper = mount(MdiChartBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
