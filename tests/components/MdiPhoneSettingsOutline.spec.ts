
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneSettingsOutline from "../../src/components/MdiPhoneSettingsOutline.vue";

test("MdiPhoneSettingsOutline snapshot", () => {
  const wrapper = mount(MdiPhoneSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
