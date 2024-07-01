
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingWireless20 from "../../src/components/MdiBatteryChargingWireless20.vue";

test("MdiBatteryChargingWireless20 snapshot", () => {
  const wrapper = mount(MdiBatteryChargingWireless20, {});
  expect(wrapper.html()).toMatchSnapshot();
});
