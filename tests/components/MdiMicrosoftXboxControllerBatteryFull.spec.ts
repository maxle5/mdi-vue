
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerBatteryFull from "../../src/components/MdiMicrosoftXboxControllerBatteryFull.vue";

test("MdiMicrosoftXboxControllerBatteryFull snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerBatteryFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
