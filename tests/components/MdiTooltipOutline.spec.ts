
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipOutline from "../../src/components/MdiTooltipOutline.vue";

test("MdiTooltipOutline snapshot", () => {
  const wrapper = mount(MdiTooltipOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
