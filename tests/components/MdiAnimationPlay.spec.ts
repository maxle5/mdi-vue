
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAnimationPlay from "../../src/components/MdiAnimationPlay.vue";

test("MdiAnimationPlay snapshot", () => {
  const wrapper = mount(MdiAnimationPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
