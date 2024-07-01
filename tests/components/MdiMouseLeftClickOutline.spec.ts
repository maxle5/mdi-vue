
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseLeftClickOutline from "../../src/components/MdiMouseLeftClickOutline.vue";

test("MdiMouseLeftClickOutline snapshot", () => {
  const wrapper = mount(MdiMouseLeftClickOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
