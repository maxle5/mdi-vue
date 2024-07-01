
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartLineVariant from "../../src/components/MdiChartLineVariant.vue";

test("MdiChartLineVariant snapshot", () => {
  const wrapper = mount(MdiChartLineVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
