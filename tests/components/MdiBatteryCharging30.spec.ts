
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging30 from "../../src/components/MdiBatteryCharging30.vue";

test("MdiBatteryCharging30 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging30, {});
  expect(wrapper.html()).toMatchSnapshot();
});
