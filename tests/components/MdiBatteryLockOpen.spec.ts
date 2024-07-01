
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryLockOpen from "../../src/components/MdiBatteryLockOpen.vue";

test("MdiBatteryLockOpen snapshot", () => {
  const wrapper = mount(MdiBatteryLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
