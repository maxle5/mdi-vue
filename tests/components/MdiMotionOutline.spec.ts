
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotionOutline from "../../src/components/MdiMotionOutline.vue";

test("MdiMotionOutline snapshot", () => {
  const wrapper = mount(MdiMotionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
