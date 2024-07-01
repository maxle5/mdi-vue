
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipRemoveOutline from "../../src/components/MdiTooltipRemoveOutline.vue";

test("MdiTooltipRemoveOutline snapshot", () => {
  const wrapper = mount(MdiTooltipRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
