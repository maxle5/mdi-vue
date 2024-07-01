
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureSwipeUp from "../../src/components/MdiGestureSwipeUp.vue";

test("MdiGestureSwipeUp snapshot", () => {
  const wrapper = mount(MdiGestureSwipeUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
