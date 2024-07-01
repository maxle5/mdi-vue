
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadDown from "../../src/components/MdiGamepadDown.vue";

test("MdiGamepadDown snapshot", () => {
  const wrapper = mount(MdiGamepadDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
