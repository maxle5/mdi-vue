
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartArc from "../../src/components/MdiChartArc.vue";

test("MdiChartArc snapshot", () => {
  const wrapper = mount(MdiChartArc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
