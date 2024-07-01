
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery30Bluetooth from "../../src/components/MdiBattery30Bluetooth.vue";

test("MdiBattery30Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery30Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
