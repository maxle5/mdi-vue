
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryArrowUpOutline from "../../src/components/MdiBatteryArrowUpOutline.vue";

test("MdiBatteryArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiBatteryArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
