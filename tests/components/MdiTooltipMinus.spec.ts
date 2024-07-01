
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipMinus from "../../src/components/MdiTooltipMinus.vue";

test("MdiTooltipMinus snapshot", () => {
  const wrapper = mount(MdiTooltipMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
