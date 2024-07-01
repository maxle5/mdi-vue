
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingHigh from "../../src/components/MdiBatteryChargingHigh.vue";

test("MdiBatteryChargingHigh snapshot", () => {
  const wrapper = mount(MdiBatteryChargingHigh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
