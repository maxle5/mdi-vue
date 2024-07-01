
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery10Bluetooth from "../../src/components/MdiBattery10Bluetooth.vue";

test("MdiBattery10Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery10Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
