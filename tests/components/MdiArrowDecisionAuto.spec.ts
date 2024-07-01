
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDecisionAuto from "../../src/components/MdiArrowDecisionAuto.vue";

test("MdiArrowDecisionAuto snapshot", () => {
  const wrapper = mount(MdiArrowDecisionAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
