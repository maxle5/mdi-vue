
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartAreaspline from "../../src/components/MdiChartAreaspline.vue";

test("MdiChartAreaspline snapshot", () => {
  const wrapper = mount(MdiChartAreaspline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
