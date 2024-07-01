
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartPieOutline from "../../src/components/MdiChartPieOutline.vue";

test("MdiChartPieOutline snapshot", () => {
  const wrapper = mount(MdiChartPieOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
