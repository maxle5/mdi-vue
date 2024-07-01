
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerBatteryLow from "../../src/components/MdiMicrosoftXboxControllerBatteryLow.vue";

test("MdiMicrosoftXboxControllerBatteryLow snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerBatteryLow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
