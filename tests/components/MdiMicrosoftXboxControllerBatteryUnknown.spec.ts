
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerBatteryUnknown from "../../src/components/MdiMicrosoftXboxControllerBatteryUnknown.vue";

test("MdiMicrosoftXboxControllerBatteryUnknown snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerBatteryUnknown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
