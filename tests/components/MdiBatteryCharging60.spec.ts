
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging60 from "../../src/components/MdiBatteryCharging60.vue";

test("MdiBatteryCharging60 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging60, {});
  expect(wrapper.html()).toMatchSnapshot();
});
