
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryMinusOutline from "../../src/components/MdiBatteryMinusOutline.vue";

test("MdiBatteryMinusOutline snapshot", () => {
  const wrapper = mount(MdiBatteryMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
