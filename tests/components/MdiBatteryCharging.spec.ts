
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging from "../../src/components/MdiBatteryCharging.vue";

test("MdiBatteryCharging snapshot", () => {
  const wrapper = mount(MdiBatteryCharging, {});
  expect(wrapper.html()).toMatchSnapshot();
});
