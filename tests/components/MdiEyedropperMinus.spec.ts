
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyedropperMinus from "../../src/components/MdiEyedropperMinus.vue";

test("MdiEyedropperMinus snapshot", () => {
  const wrapper = mount(MdiEyedropperMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
