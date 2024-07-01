
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerBatteryEmpty from "../../src/components/MdiMicrosoftXboxControllerBatteryEmpty.vue";

test("MdiMicrosoftXboxControllerBatteryEmpty snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerBatteryEmpty, {});
  expect(wrapper.html()).toMatchSnapshot();
});
