
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDecision from "../../src/components/MdiArrowDecision.vue";

test("MdiArrowDecision snapshot", () => {
  const wrapper = mount(MdiArrowDecision, {});
  expect(wrapper.html()).toMatchSnapshot();
});
