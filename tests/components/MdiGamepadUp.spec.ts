
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadUp from "../../src/components/MdiGamepadUp.vue";

test("MdiGamepadUp snapshot", () => {
  const wrapper = mount(MdiGamepadUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
