
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureDoubleTap from "../../src/components/MdiGestureDoubleTap.vue";

test("MdiGestureDoubleTap snapshot", () => {
  const wrapper = mount(MdiGestureDoubleTap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
