
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryRemove from "../../src/components/MdiBatteryRemove.vue";

test("MdiBatteryRemove snapshot", () => {
  const wrapper = mount(MdiBatteryRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
