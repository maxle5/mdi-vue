
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleKeyboardControl from "../../src/components/MdiAppleKeyboardControl.vue";

test("MdiAppleKeyboardControl snapshot", () => {
  const wrapper = mount(MdiAppleKeyboardControl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
