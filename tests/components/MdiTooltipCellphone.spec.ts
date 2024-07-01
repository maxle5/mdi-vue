
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipCellphone from "../../src/components/MdiTooltipCellphone.vue";

test("MdiTooltipCellphone snapshot", () => {
  const wrapper = mount(MdiTooltipCellphone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
