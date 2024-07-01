
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCheckOutline from "../../src/components/MdiBatteryCheckOutline.vue";

test("MdiBatteryCheckOutline snapshot", () => {
  const wrapper = mount(MdiBatteryCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
