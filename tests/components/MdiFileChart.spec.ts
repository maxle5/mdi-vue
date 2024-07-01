
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileChart from "../../src/components/MdiFileChart.vue";

test("MdiFileChart snapshot", () => {
  const wrapper = mount(MdiFileChart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
