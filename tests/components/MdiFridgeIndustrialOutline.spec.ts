
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeIndustrialOutline from "../../src/components/MdiFridgeIndustrialOutline.vue";

test("MdiFridgeIndustrialOutline snapshot", () => {
  const wrapper = mount(MdiFridgeIndustrialOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
