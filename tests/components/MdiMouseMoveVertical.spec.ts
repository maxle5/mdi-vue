
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseMoveVertical from "../../src/components/MdiMouseMoveVertical.vue";

test("MdiMouseMoveVertical snapshot", () => {
  const wrapper = mount(MdiMouseMoveVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
