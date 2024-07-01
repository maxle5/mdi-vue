
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAnimationPlayOutline from "../../src/components/MdiAnimationPlayOutline.vue";

test("MdiAnimationPlayOutline snapshot", () => {
  const wrapper = mount(MdiAnimationPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
