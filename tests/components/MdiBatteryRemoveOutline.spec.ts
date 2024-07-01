
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryRemoveOutline from "../../src/components/MdiBatteryRemoveOutline.vue";

test("MdiBatteryRemoveOutline snapshot", () => {
  const wrapper = mount(MdiBatteryRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
