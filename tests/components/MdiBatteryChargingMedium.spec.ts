
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingMedium from "../../src/components/MdiBatteryChargingMedium.vue";

test("MdiBatteryChargingMedium snapshot", () => {
  const wrapper = mount(MdiBatteryChargingMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
