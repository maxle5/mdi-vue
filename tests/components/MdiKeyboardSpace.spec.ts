
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardSpace from "../../src/components/MdiKeyboardSpace.vue";

test("MdiKeyboardSpace snapshot", () => {
  const wrapper = mount(MdiKeyboardSpace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
