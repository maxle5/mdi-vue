
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging80 from "../../src/components/MdiBatteryCharging80.vue";

test("MdiBatteryCharging80 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging80, {});
  expect(wrapper.html()).toMatchSnapshot();
});
