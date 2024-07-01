
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartWaterfall from "../../src/components/MdiChartWaterfall.vue";

test("MdiChartWaterfall snapshot", () => {
  const wrapper = mount(MdiChartWaterfall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
