
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless50 from "../../src/components/MdiBatteryChargingWireless50.vue";

test("MdiBatteryChargingWireless50 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless50, {});
  expect(wrapper.html()).toMatchSnapshot();
});
