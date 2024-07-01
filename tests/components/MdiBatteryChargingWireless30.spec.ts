
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless30 from "../../src/components/MdiBatteryChargingWireless30.vue";

test("MdiBatteryChargingWireless30 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless30, {});
  expect(wrapper.html()).toMatchSnapshot();
});
