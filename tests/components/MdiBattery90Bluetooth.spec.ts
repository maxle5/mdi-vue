
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery90Bluetooth from "../../src/components/MdiBattery90Bluetooth.vue";

test("MdiBattery90Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery90Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
