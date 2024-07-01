
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryArrowDownOutline from "../../src/components/MdiBatteryArrowDownOutline.vue";

test("MdiBatteryArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiBatteryArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
