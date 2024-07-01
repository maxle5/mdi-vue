
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowCollapseDown from "../../src/components/MdiArrowCollapseDown.vue";

test("MdiArrowCollapseDown snapshot", () => {
  const wrapper = mount(MdiArrowCollapseDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
