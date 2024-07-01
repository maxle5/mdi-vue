
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartLine from "../../src/components/MdiChartLine.vue";

test("MdiChartLine snapshot", () => {
  const wrapper = mount(MdiChartLine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
