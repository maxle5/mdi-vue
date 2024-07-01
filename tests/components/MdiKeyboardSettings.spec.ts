
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardSettings from "../../src/components/MdiKeyboardSettings.vue";

test("MdiKeyboardSettings snapshot", () => {
  const wrapper = mount(MdiKeyboardSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
