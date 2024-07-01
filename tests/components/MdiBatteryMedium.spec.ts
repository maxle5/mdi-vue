
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryMedium from "../../src/components/MdiBatteryMedium.vue";

test("MdiBatteryMedium snapshot", () => {
  const wrapper = mount(MdiBatteryMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
