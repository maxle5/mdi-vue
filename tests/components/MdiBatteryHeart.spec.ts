
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryHeart from "../../src/components/MdiBatteryHeart.vue";

test("MdiBatteryHeart snapshot", () => {
  const wrapper = mount(MdiBatteryHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
