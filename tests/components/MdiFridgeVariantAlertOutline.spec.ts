
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeVariantAlertOutline from "../../src/components/MdiFridgeVariantAlertOutline.vue";

test("MdiFridgeVariantAlertOutline snapshot", () => {
  const wrapper = mount(MdiFridgeVariantAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
