
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBellCurve from "../../src/components/MdiChartBellCurve.vue";

test("MdiChartBellCurve snapshot", () => {
  const wrapper = mount(MdiChartBellCurve, {});
  expect(wrapper.html()).toMatchSnapshot();
});
