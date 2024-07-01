
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerBatteryCharging from "../../src/components/MdiMicrosoftXboxControllerBatteryCharging.vue";

test("MdiMicrosoftXboxControllerBatteryCharging snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerBatteryCharging, {});
  expect(wrapper.html()).toMatchSnapshot();
});
