
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerBatteryMedium from "../../src/components/MdiMicrosoftXboxControllerBatteryMedium.vue";

test("MdiMicrosoftXboxControllerBatteryMedium snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerBatteryMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
