
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadCircleUp from "../../src/components/MdiGamepadCircleUp.vue";

test("MdiGamepadCircleUp snapshot", () => {
  const wrapper = mount(MdiGamepadCircleUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
