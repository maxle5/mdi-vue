
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery60Bluetooth from "../../src/components/MdiBattery60Bluetooth.vue";

test("MdiBattery60Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery60Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
