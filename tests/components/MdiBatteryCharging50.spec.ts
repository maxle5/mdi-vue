
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging50 from "../../src/components/MdiBatteryCharging50.vue";

test("MdiBatteryCharging50 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging50, {});
  expect(wrapper.html()).toMatchSnapshot();
});
