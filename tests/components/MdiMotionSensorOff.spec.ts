
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotionSensorOff from "../../src/components/MdiMotionSensorOff.vue";

test("MdiMotionSensorOff snapshot", () => {
  const wrapper = mount(MdiMotionSensorOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
