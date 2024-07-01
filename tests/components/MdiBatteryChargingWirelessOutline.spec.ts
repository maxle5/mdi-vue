
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWirelessOutline from "../../src/components/MdiBatteryChargingWirelessOutline.vue";

test("MdiBatteryChargingWirelessOutline snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWirelessOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
