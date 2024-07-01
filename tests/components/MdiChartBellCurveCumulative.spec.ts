
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBellCurveCumulative from "../../src/components/MdiChartBellCurveCumulative.vue";

test("MdiChartBellCurveCumulative snapshot", () => {
  const wrapper = mount(MdiChartBellCurveCumulative, {});
  expect(wrapper.html()).toMatchSnapshot();
});
