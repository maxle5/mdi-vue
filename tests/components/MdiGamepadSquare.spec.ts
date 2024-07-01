
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadSquare from "../../src/components/MdiGamepadSquare.vue";

test("MdiGamepadSquare snapshot", () => {
  const wrapper = mount(MdiGamepadSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
