
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipCheck from "../../src/components/MdiTooltipCheck.vue";

test("MdiTooltipCheck snapshot", () => {
  const wrapper = mount(MdiTooltipCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
