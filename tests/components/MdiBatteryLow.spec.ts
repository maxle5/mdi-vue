
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryLow from "../../src/components/MdiBatteryLow.vue";

test("MdiBatteryLow snapshot", () => {
  const wrapper = mount(MdiBatteryLow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
