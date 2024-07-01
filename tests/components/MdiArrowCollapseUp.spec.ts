
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowCollapseUp from "../../src/components/MdiArrowCollapseUp.vue";

test("MdiArrowCollapseUp snapshot", () => {
  const wrapper = mount(MdiArrowCollapseUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
