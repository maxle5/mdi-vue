
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotionSensor from "../../src/components/MdiMotionSensor.vue";

test("MdiMotionSensor snapshot", () => {
  const wrapper = mount(MdiMotionSensor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
