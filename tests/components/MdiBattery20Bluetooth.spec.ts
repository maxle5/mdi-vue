
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery20Bluetooth from "../../src/components/MdiBattery20Bluetooth.vue";

test("MdiBattery20Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery20Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
