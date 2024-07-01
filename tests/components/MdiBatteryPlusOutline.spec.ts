
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryPlusOutline from "../../src/components/MdiBatteryPlusOutline.vue";

test("MdiBatteryPlusOutline snapshot", () => {
  const wrapper = mount(MdiBatteryPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
