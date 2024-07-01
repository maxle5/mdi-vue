
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryUnknown from "../../src/components/MdiBatteryUnknown.vue";

test("MdiBatteryUnknown snapshot", () => {
  const wrapper = mount(MdiBatteryUnknown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
