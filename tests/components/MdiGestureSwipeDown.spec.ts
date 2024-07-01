
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureSwipeDown from "../../src/components/MdiGestureSwipeDown.vue";

test("MdiGestureSwipeDown snapshot", () => {
  const wrapper = mount(MdiGestureSwipeDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
