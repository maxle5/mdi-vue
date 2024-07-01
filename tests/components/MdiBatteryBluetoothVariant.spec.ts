
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryBluetoothVariant from "../../src/components/MdiBatteryBluetoothVariant.vue";

test("MdiBatteryBluetoothVariant snapshot", () => {
  const wrapper = mount(MdiBatteryBluetoothVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
