
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBoxOutline from "../../src/components/MdiChartBoxOutline.vue";

test("MdiChartBoxOutline snapshot", () => {
  const wrapper = mount(MdiChartBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
