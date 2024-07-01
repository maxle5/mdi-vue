
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipMinusOutline from "../../src/components/MdiTooltipMinusOutline.vue";

test("MdiTooltipMinusOutline snapshot", () => {
  const wrapper = mount(MdiTooltipMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
