
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartTimelineVariantShimmer from "../../src/components/MdiChartTimelineVariantShimmer.vue";

test("MdiChartTimelineVariantShimmer snapshot", () => {
  const wrapper = mount(MdiChartTimelineVariantShimmer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
