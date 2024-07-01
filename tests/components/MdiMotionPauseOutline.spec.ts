
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotionPauseOutline from "../../src/components/MdiMotionPauseOutline.vue";

test("MdiMotionPauseOutline snapshot", () => {
  const wrapper = mount(MdiMotionPauseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
