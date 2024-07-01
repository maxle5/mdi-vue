
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeIndustrialOff from "../../src/components/MdiFridgeIndustrialOff.vue";

test("MdiFridgeIndustrialOff snapshot", () => {
  const wrapper = mount(MdiFridgeIndustrialOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
