
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureSwipeVertical from "../../src/components/MdiGestureSwipeVertical.vue";

test("MdiGestureSwipeVertical snapshot", () => {
  const wrapper = mount(MdiGestureSwipeVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
