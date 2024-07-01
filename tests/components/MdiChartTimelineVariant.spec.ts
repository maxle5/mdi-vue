
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartTimelineVariant from "../../src/components/MdiChartTimelineVariant.vue";

test("MdiChartTimelineVariant snapshot", () => {
  const wrapper = mount(MdiChartTimelineVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
