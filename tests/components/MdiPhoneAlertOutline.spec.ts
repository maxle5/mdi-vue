
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneAlertOutline from "../../src/components/MdiPhoneAlertOutline.vue";

test("MdiPhoneAlertOutline snapshot", () => {
  const wrapper = mount(MdiPhoneAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
