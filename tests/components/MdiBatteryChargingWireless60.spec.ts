
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless60 from "../../src/components/MdiBatteryChargingWireless60.vue";

test("MdiBatteryChargingWireless60 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless60, {});
  expect(wrapper.html()).toMatchSnapshot();
});
