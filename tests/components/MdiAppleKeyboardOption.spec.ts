
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleKeyboardOption from "../../src/components/MdiAppleKeyboardOption.vue";

test("MdiAppleKeyboardOption snapshot", () => {
  const wrapper = mount(MdiAppleKeyboardOption, {});
  expect(wrapper.html()).toMatchSnapshot();
});
