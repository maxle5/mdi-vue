
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryHigh from "../../src/components/MdiBatteryHigh.vue";

test("MdiBatteryHigh snapshot", () => {
  const wrapper = mount(MdiBatteryHigh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
