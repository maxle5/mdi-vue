
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatterySync from "../../src/components/MdiBatterySync.vue";

test("MdiBatterySync snapshot", () => {
  const wrapper = mount(MdiBatterySync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
