
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryPlusVariant from "../../src/components/MdiBatteryPlusVariant.vue";

test("MdiBatteryPlusVariant snapshot", () => {
  const wrapper = mount(MdiBatteryPlusVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
