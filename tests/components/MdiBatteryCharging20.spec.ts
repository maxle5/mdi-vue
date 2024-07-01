
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCharging20 from "../../src/components/MdiBatteryCharging20.vue";

test("MdiBatteryCharging20 snapshot", () => {
  const wrapper = mount(MdiBatteryCharging20, {});
  expect(wrapper.html()).toMatchSnapshot();
});
