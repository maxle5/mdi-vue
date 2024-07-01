
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneSettings from "../../src/components/MdiPhoneSettings.vue";

test("MdiPhoneSettings snapshot", () => {
  const wrapper = mount(MdiPhoneSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
