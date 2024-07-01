
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDecisionAutoOutline from "../../src/components/MdiArrowDecisionAutoOutline.vue";

test("MdiArrowDecisionAutoOutline snapshot", () => {
  const wrapper = mount(MdiArrowDecisionAutoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
