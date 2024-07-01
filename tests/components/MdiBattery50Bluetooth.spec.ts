
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery50Bluetooth from "../../src/components/MdiBattery50Bluetooth.vue";

test("MdiBattery50Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery50Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
