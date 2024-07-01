
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeIndustrialAlertOutline from "../../src/components/MdiFridgeIndustrialAlertOutline.vue";

test("MdiFridgeIndustrialAlertOutline snapshot", () => {
  const wrapper = mount(MdiFridgeIndustrialAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
