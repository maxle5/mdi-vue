
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryLock from "../../src/components/MdiBatteryLock.vue";

test("MdiBatteryLock snapshot", () => {
  const wrapper = mount(MdiBatteryLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
