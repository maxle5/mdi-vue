
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadCircleRight from "../../src/components/MdiGamepadCircleRight.vue";

test("MdiGamepadCircleRight snapshot", () => {
  const wrapper = mount(MdiGamepadCircleRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
