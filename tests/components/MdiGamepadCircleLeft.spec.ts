
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadCircleLeft from "../../src/components/MdiGamepadCircleLeft.vue";

test("MdiGamepadCircleLeft snapshot", () => {
  const wrapper = mount(MdiGamepadCircleLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
