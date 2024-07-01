
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartLineStacked from "../../src/components/MdiChartLineStacked.vue";

test("MdiChartLineStacked snapshot", () => {
  const wrapper = mount(MdiChartLineStacked, {});
  expect(wrapper.html()).toMatchSnapshot();
});
