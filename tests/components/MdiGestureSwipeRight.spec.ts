
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureSwipeRight from "../../src/components/MdiGestureSwipeRight.vue";

test("MdiGestureSwipeRight snapshot", () => {
  const wrapper = mount(MdiGestureSwipeRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
