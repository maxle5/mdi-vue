
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging10 from "../../src/components/MdiBatteryCharging10.vue";

test("MdiBatteryCharging10 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
