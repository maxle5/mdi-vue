
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryAlertVariant from "../../src/components/MdiBatteryAlertVariant.vue";

test("MdiBatteryAlertVariant snapshot", () => {
  const wrapper = mount(MdiBatteryAlertVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
