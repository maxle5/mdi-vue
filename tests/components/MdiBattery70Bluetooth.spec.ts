
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery70Bluetooth from "../../src/components/MdiBattery70Bluetooth.vue";

test("MdiBattery70Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery70Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
