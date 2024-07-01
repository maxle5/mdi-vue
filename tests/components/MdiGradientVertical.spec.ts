
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGradientVertical from "../../src/components/MdiGradientVertical.vue";

test("MdiGradientVertical snapshot", () => {
  const wrapper = mount(MdiGradientVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
