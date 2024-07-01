
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBox from "../../src/components/MdiChartBox.vue";

test("MdiChartBox snapshot", () => {
  const wrapper = mount(MdiChartBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
