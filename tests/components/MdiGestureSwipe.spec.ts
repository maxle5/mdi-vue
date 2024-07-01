
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureSwipe from "../../src/components/MdiGestureSwipe.vue";

test("MdiGestureSwipe snapshot", () => {
  const wrapper = mount(MdiGestureSwipe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
