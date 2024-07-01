
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryNegative from "../../src/components/MdiBatteryNegative.vue";

test("MdiBatteryNegative snapshot", () => {
  const wrapper = mount(MdiBatteryNegative, {});
  expect(wrapper.html()).toMatchSnapshot();
});
