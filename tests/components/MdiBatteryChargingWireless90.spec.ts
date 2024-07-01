
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless90 from "../../src/components/MdiBatteryChargingWireless90.vue";

test("MdiBatteryChargingWireless90 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless90, {});
  expect(wrapper.html()).toMatchSnapshot();
});
