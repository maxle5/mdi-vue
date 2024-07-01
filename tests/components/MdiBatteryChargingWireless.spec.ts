
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless from "../../src/components/MdiBatteryChargingWireless.vue";

test("MdiBatteryChargingWireless snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
