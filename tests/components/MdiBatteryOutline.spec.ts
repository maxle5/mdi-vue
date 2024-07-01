
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryOutline from "../../src/components/MdiBatteryOutline.vue";

test("MdiBatteryOutline snapshot", () => {
  const wrapper = mount(MdiBatteryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
