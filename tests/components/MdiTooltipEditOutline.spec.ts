
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipEditOutline from "../../src/components/MdiTooltipEditOutline.vue";

test("MdiTooltipEditOutline snapshot", () => {
  const wrapper = mount(MdiTooltipEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
