
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryUnknownBluetooth from "../../src/components/MdiBatteryUnknownBluetooth.vue";

test("MdiBatteryUnknownBluetooth snapshot", () => {
  const wrapper = mount(MdiBatteryUnknownBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
