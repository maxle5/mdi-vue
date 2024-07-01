
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery40Bluetooth from "../../src/components/MdiBattery40Bluetooth.vue";

test("MdiBattery40Bluetooth snapshot", () => {
  const wrapper = mount(MdiBattery40Bluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
