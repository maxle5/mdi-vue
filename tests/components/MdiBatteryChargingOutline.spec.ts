
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryChargingOutline from "../../src/components/MdiBatteryChargingOutline.vue";

test("MdiBatteryChargingOutline snapshot", () => {
  const wrapper = mount(MdiBatteryChargingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
