
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardSettingsOutline from "../../src/components/MdiKeyboardSettingsOutline.vue";

test("MdiKeyboardSettingsOutline snapshot", () => {
  const wrapper = mount(MdiKeyboardSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
