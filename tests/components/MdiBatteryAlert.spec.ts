
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryAlert from "../../src/components/MdiBatteryAlert.vue";

test("MdiBatteryAlert snapshot", () => {
  const wrapper = mount(MdiBatteryAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
