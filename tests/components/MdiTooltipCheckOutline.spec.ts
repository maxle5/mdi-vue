
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipCheckOutline from "../../src/components/MdiTooltipCheckOutline.vue";

test("MdiTooltipCheckOutline snapshot", () => {
  const wrapper = mount(MdiTooltipCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
