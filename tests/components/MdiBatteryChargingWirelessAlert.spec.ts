
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWirelessAlert from "../../src/components/MdiBatteryChargingWirelessAlert.vue";

test("MdiBatteryChargingWirelessAlert snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWirelessAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
