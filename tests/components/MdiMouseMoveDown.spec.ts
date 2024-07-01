
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseMoveDown from "../../src/components/MdiMouseMoveDown.vue";

test("MdiMouseMoveDown snapshot", () => {
  const wrapper = mount(MdiMouseMoveDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
