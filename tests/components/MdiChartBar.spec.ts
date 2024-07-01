
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBar from "../../src/components/MdiChartBar.vue";

test("MdiChartBar snapshot", () => {
  const wrapper = mount(MdiChartBar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
