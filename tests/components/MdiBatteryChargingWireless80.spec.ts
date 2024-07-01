
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless80 from "../../src/components/MdiBatteryChargingWireless80.vue";

test("MdiBatteryChargingWireless80 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless80, {});
  expect(wrapper.html()).toMatchSnapshot();
});
