
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipPlus from "../../src/components/MdiTooltipPlus.vue";

test("MdiTooltipPlus snapshot", () => {
  const wrapper = mount(MdiTooltipPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
