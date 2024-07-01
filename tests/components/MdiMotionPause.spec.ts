
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotionPause from "../../src/components/MdiMotionPause.vue";

test("MdiMotionPause snapshot", () => {
  const wrapper = mount(MdiMotionPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});
