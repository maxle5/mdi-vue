
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingLow from "../../src/components/MdiBatteryChargingLow.vue";

test("MdiBatteryChargingLow snapshot", () => {
  const wrapper = mount(MdiBatteryChargingLow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
