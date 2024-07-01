
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipTextOutline from "../../src/components/MdiTooltipTextOutline.vue";

test("MdiTooltipTextOutline snapshot", () => {
  const wrapper = mount(MdiTooltipTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
