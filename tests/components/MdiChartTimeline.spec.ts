
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartTimeline from "../../src/components/MdiChartTimeline.vue";

test("MdiChartTimeline snapshot", () => {
  const wrapper = mount(MdiChartTimeline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
