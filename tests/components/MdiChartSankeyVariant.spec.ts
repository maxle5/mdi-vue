
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartSankeyVariant from "../../src/components/MdiChartSankeyVariant.vue";

test("MdiChartSankeyVariant snapshot", () => {
  const wrapper = mount(MdiChartSankeyVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
