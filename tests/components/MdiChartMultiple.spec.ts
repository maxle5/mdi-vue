
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartMultiple from "../../src/components/MdiChartMultiple.vue";

test("MdiChartMultiple snapshot", () => {
  const wrapper = mount(MdiChartMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
