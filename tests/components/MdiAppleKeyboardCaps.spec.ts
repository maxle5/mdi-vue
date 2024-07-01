
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleKeyboardCaps from "../../src/components/MdiAppleKeyboardCaps.vue";

test("MdiAppleKeyboardCaps snapshot", () => {
  const wrapper = mount(MdiAppleKeyboardCaps, {});
  expect(wrapper.html()).toMatchSnapshot();
});
