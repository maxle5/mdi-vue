
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureSwipeLeft from "../../src/components/MdiGestureSwipeLeft.vue";

test("MdiGestureSwipeLeft snapshot", () => {
  const wrapper = mount(MdiGestureSwipeLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
