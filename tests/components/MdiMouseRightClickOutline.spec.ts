
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseRightClickOutline from "../../src/components/MdiMouseRightClickOutline.vue";

test("MdiMouseRightClickOutline snapshot", () => {
  const wrapper = mount(MdiMouseRightClickOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
