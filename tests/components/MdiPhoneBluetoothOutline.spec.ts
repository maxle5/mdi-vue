
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneBluetoothOutline from "../../src/components/MdiPhoneBluetoothOutline.vue";

test("MdiPhoneBluetoothOutline snapshot", () => {
  const wrapper = mount(MdiPhoneBluetoothOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
