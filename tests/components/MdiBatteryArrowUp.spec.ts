
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryArrowUp from "../../src/components/MdiBatteryArrowUp.vue";

test("MdiBatteryArrowUp snapshot", () => {
  const wrapper = mount(MdiBatteryArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
