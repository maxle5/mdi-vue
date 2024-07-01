
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileChartCheckOutline from "../../src/components/MdiFileChartCheckOutline.vue";

test("MdiFileChartCheckOutline snapshot", () => {
  const wrapper = mount(MdiFileChartCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
