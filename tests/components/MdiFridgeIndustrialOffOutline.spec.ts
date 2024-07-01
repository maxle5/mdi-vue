
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeIndustrialOffOutline from "../../src/components/MdiFridgeIndustrialOffOutline.vue";

test("MdiFridgeIndustrialOffOutline snapshot", () => {
  const wrapper = mount(MdiFridgeIndustrialOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
