
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBoxPlusOutline from "../../src/components/MdiChartBoxPlusOutline.vue";

test("MdiChartBoxPlusOutline snapshot", () => {
  const wrapper = mount(MdiChartBoxPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
