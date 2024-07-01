
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipQuestion from "../../src/components/MdiTooltipQuestion.vue";

test("MdiTooltipQuestion snapshot", () => {
  const wrapper = mount(MdiTooltipQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
