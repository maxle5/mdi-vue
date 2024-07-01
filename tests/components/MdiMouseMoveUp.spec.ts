
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseMoveUp from "../../src/components/MdiMouseMoveUp.vue";

test("MdiMouseMoveUp snapshot", () => {
  const wrapper = mount(MdiMouseMoveUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
