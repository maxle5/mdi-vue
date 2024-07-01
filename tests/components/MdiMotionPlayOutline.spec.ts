
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotionPlayOutline from "../../src/components/MdiMotionPlayOutline.vue";

test("MdiMotionPlayOutline snapshot", () => {
  const wrapper = mount(MdiMotionPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
