
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartPie from "../../src/components/MdiChartPie.vue";

test("MdiChartPie snapshot", () => {
  const wrapper = mount(MdiChartPie, {});
  expect(wrapper.html()).toMatchSnapshot();
});
