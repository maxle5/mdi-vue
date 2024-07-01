
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartScatterPlotHexbin from "../../src/components/MdiChartScatterPlotHexbin.vue";

test("MdiChartScatterPlotHexbin snapshot", () => {
  const wrapper = mount(MdiChartScatterPlotHexbin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
