
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipImageOutline from "../../src/components/MdiTooltipImageOutline.vue";

test("MdiTooltipImageOutline snapshot", () => {
  const wrapper = mount(MdiTooltipImageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
