
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryMinus from "../../src/components/MdiBatteryMinus.vue";

test("MdiBatteryMinus snapshot", () => {
  const wrapper = mount(MdiBatteryMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
