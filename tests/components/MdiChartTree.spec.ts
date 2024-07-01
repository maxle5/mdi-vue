
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartTree from "../../src/components/MdiChartTree.vue";

test("MdiChartTree snapshot", () => {
  const wrapper = mount(MdiChartTree, {});
  expect(wrapper.html()).toMatchSnapshot();
});
