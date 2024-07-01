
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartDonutVariant from "../../src/components/MdiChartDonutVariant.vue";

test("MdiChartDonutVariant snapshot", () => {
  const wrapper = mount(MdiChartDonutVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
