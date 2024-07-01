
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging70 from "../../src/components/MdiBatteryCharging70.vue";

test("MdiBatteryCharging70 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging70, {});
  expect(wrapper.html()).toMatchSnapshot();
});
