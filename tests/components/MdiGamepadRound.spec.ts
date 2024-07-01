
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadRound from "../../src/components/MdiGamepadRound.vue";

test("MdiGamepadRound snapshot", () => {
  const wrapper = mount(MdiGamepadRound, {});
  expect(wrapper.html()).toMatchSnapshot();
});
