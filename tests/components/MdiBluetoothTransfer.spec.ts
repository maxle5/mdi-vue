
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBluetoothTransfer from "../../src/components/MdiBluetoothTransfer.vue";

test("MdiBluetoothTransfer snapshot", () => {
  const wrapper = mount(MdiBluetoothTransfer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
