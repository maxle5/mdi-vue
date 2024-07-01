
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartMultiline from "../../src/components/MdiChartMultiline.vue";

test("MdiChartMultiline snapshot", () => {
  const wrapper = mount(MdiChartMultiline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
