
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartScatterPlot from "../../src/components/MdiChartScatterPlot.vue";

test("MdiChartScatterPlot snapshot", () => {
  const wrapper = mount(MdiChartScatterPlot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
