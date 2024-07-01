
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryArrowDown from "../../src/components/MdiBatteryArrowDown.vue";

test("MdiBatteryArrowDown snapshot", () => {
  const wrapper = mount(MdiBatteryArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
