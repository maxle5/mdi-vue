
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless70 from "../../src/components/MdiBatteryChargingWireless70.vue";

test("MdiBatteryChargingWireless70 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless70, {});
  expect(wrapper.html()).toMatchSnapshot();
});
