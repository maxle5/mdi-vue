
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryPositive from "../../src/components/MdiBatteryPositive.vue";

test("MdiBatteryPositive snapshot", () => {
  const wrapper = mount(MdiBatteryPositive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
