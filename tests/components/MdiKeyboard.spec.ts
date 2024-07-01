
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboard from "../../src/components/MdiKeyboard.vue";

test("MdiKeyboard snapshot", () => {
  const wrapper = mount(MdiKeyboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
