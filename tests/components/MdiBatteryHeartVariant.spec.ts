
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryHeartVariant from "../../src/components/MdiBatteryHeartVariant.vue";

test("MdiBatteryHeartVariant snapshot", () => {
  const wrapper = mount(MdiBatteryHeartVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
