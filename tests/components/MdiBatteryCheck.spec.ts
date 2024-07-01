
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryCheck from "../../src/components/MdiBatteryCheck.vue";

test("MdiBatteryCheck snapshot", () => {
  const wrapper = mount(MdiBatteryCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
