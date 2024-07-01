
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipQuestionOutline from "../../src/components/MdiTooltipQuestionOutline.vue";

test("MdiTooltipQuestionOutline snapshot", () => {
  const wrapper = mount(MdiTooltipQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
