
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryAlertVariantOutline from "../../src/components/MdiBatteryAlertVariantOutline.vue";

test("MdiBatteryAlertVariantOutline snapshot", () => {
  const wrapper = mount(MdiBatteryAlertVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
