
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryClockOutline from "../../src/components/MdiBatteryClockOutline.vue";

test("MdiBatteryClockOutline snapshot", () => {
  const wrapper = mount(MdiBatteryClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
