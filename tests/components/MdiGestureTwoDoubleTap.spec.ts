
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureTwoDoubleTap from "../../src/components/MdiGestureTwoDoubleTap.vue";

test("MdiGestureTwoDoubleTap snapshot", () => {
  const wrapper = mount(MdiGestureTwoDoubleTap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
