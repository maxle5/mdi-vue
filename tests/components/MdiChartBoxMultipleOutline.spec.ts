
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBoxMultipleOutline from "../../src/components/MdiChartBoxMultipleOutline.vue";

test("MdiChartBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiChartBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
