
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileChartOutline from "../../src/components/MdiFileChartOutline.vue";

test("MdiFileChartOutline snapshot", () => {
  const wrapper = mount(MdiFileChartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
