
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScatterPlotOutline from "../../src/components/MdiScatterPlotOutline.vue";

test("MdiScatterPlotOutline snapshot", () => {
  const wrapper = mount(MdiScatterPlotOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
