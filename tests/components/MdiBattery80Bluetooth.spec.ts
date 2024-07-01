
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery80Bluetooth from "../../src/components/MdiBattery80Bluetooth.vue";

test("MdiBattery80Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery80Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
