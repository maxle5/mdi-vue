
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipPlusOutline from "../../src/components/MdiTooltipPlusOutline.vue";

test("MdiTooltipPlusOutline snapshot", () => {
  const wrapper = mount(MdiTooltipPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
