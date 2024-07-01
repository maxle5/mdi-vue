
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryOffOutline from "../../src/components/MdiBatteryOffOutline.vue";

test("MdiBatteryOffOutline snapshot", () => {
  const wrapper = mount(MdiBatteryOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
