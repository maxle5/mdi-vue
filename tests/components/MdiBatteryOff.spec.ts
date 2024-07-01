
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryOff from "../../src/components/MdiBatteryOff.vue";

test("MdiBatteryOff snapshot", () => {
  const wrapper = mount(MdiBatteryOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
