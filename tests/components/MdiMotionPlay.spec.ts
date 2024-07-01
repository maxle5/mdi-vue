
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotionPlay from "../../src/components/MdiMotionPlay.vue";

test("MdiMotionPlay snapshot", () => {
  const wrapper = mount(MdiMotionPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
