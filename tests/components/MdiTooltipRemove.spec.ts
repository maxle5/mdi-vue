
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipRemove from "../../src/components/MdiTooltipRemove.vue";

test("MdiTooltipRemove snapshot", () => {
  const wrapper = mount(MdiTooltipRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
