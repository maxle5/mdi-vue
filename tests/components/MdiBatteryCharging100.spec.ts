
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging100 from "../../src/components/MdiBatteryCharging100.vue";

test("MdiBatteryCharging100 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging100, {});
  expect(wrapper.html()).toMatchSnapshot();
});
