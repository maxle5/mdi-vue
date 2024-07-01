
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAnimation from "../../src/components/MdiAnimation.vue";

test("MdiAnimation snapshot", () => {
  const wrapper = mount(MdiAnimation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
