
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryAlertBluetooth from "../../src/components/MdiBatteryAlertBluetooth.vue";

test("MdiBatteryAlertBluetooth snapshot", () => {
  const wrapper = mount(MdiBatteryAlertBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
