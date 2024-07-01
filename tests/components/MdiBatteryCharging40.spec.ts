
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging40 from "../../src/components/MdiBatteryCharging40.vue";

test("MdiBatteryCharging40 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging40, {});
  expect(wrapper.html()).toMatchSnapshot();
});
