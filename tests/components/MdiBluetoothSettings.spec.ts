
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBluetoothSettings from "../../src/components/MdiBluetoothSettings.vue";

test("MdiBluetoothSettings snapshot", () => {
  const wrapper = mount(MdiBluetoothSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
