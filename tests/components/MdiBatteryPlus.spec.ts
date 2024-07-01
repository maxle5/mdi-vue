
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryPlus from "../../src/components/MdiBatteryPlus.vue";

test("MdiBatteryPlus snapshot", () => {
  const wrapper = mount(MdiBatteryPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
