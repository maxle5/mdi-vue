
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBluetoothOff from "../../src/components/MdiBluetoothOff.vue";

test("MdiBluetoothOff snapshot", () => {
  const wrapper = mount(MdiBluetoothOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
