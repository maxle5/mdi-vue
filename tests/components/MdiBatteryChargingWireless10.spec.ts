
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless10 from "../../src/components/MdiBatteryChargingWireless10.vue";

test("MdiBatteryChargingWireless10 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
