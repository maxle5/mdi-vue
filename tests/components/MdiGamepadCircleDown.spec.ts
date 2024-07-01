
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadCircleDown from "../../src/components/MdiGamepadCircleDown.vue";

test("MdiGamepadCircleDown snapshot", () => {
  const wrapper = mount(MdiGamepadCircleDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
