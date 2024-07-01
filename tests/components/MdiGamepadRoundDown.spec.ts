
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadRoundDown from "../../src/components/MdiGamepadRoundDown.vue";

test("MdiGamepadRoundDown snapshot", () => {
  const wrapper = mount(MdiGamepadRoundDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
