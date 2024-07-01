
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardVariant from "../../src/components/MdiKeyboardVariant.vue";

test("MdiKeyboardVariant snapshot", () => {
  const wrapper = mount(MdiKeyboardVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
