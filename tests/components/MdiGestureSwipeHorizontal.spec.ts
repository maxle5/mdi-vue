
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureSwipeHorizontal from "../../src/components/MdiGestureSwipeHorizontal.vue";

test("MdiGestureSwipeHorizontal snapshot", () => {
  const wrapper = mount(MdiGestureSwipeHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
