
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardF1 from "../../src/components/MdiKeyboardF1.vue";

test("MdiKeyboardF1 snapshot", () => {
  const wrapper = mount(MdiKeyboardF1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
