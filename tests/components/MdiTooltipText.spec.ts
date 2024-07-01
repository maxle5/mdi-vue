
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipText from "../../src/components/MdiTooltipText.vue";

test("MdiTooltipText snapshot", () => {
  const wrapper = mount(MdiTooltipText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
