
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless40 from "../../src/components/MdiBatteryChargingWireless40.vue";

test("MdiBatteryChargingWireless40 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless40, {});
  expect(wrapper.html()).toMatchSnapshot();
});
