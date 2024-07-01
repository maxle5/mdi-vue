
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDecisionOutline from "../../src/components/MdiArrowDecisionOutline.vue";

test("MdiArrowDecisionOutline snapshot", () => {
  const wrapper = mount(MdiArrowDecisionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
