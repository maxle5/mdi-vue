
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleKeyboardCommand from "../../src/components/MdiAppleKeyboardCommand.vue";

test("MdiAppleKeyboardCommand snapshot", () => {
  const wrapper = mount(MdiAppleKeyboardCommand, {});
  expect(wrapper.html()).toMatchSnapshot();
});
