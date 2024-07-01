
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryHeartOutline from "../../src/components/MdiBatteryHeartOutline.vue";

test("MdiBatteryHeartOutline snapshot", () => {
  const wrapper = mount(MdiBatteryHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
