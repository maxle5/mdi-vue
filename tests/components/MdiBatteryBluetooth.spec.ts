
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryBluetooth from "../../src/components/MdiBatteryBluetooth.vue";

test("MdiBatteryBluetooth snapshot", () => {
  const wrapper = mount(MdiBatteryBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
