
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging90 from "../../src/components/MdiBatteryCharging90.vue";

test("MdiBatteryCharging90 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging90, {});
  expect(wrapper.html()).toMatchSnapshot();
});
