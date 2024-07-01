
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartGantt from "../../src/components/MdiChartGantt.vue";

test("MdiChartGantt snapshot", () => {
  const wrapper = mount(MdiChartGantt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
