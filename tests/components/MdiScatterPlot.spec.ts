
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScatterPlot from "../../src/components/MdiScatterPlot.vue";

test("MdiScatterPlot snapshot", () => {
  const wrapper = mount(MdiScatterPlot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
