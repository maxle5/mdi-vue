
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAnimationOutline from "../../src/components/MdiAnimationOutline.vue";

test("MdiAnimationOutline snapshot", () => {
  const wrapper = mount(MdiAnimationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
