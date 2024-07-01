
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowCollapseVertical from "../../src/components/MdiArrowCollapseVertical.vue";

test("MdiArrowCollapseVertical snapshot", () => {
  const wrapper = mount(MdiArrowCollapseVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
