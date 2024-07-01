
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartSankey from "../../src/components/MdiChartSankey.vue";

test("MdiChartSankey snapshot", () => {
  const wrapper = mount(MdiChartSankey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
