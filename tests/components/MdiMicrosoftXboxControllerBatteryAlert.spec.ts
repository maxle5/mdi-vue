
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerBatteryAlert from "../../src/components/MdiMicrosoftXboxControllerBatteryAlert.vue";

test("MdiMicrosoftXboxControllerBatteryAlert snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerBatteryAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
