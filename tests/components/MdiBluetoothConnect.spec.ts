
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBluetoothConnect from "../../src/components/MdiBluetoothConnect.vue";

test("MdiBluetoothConnect snapshot", () => {
  const wrapper = mount(MdiBluetoothConnect, {});
  expect(wrapper.html()).toMatchSnapshot();
});
