
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartAreasplineVariant from "../../src/components/MdiChartAreasplineVariant.vue";

test("MdiChartAreasplineVariant snapshot", () => {
  const wrapper = mount(MdiChartAreasplineVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
