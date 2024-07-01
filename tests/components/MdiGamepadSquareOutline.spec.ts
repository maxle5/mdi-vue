
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadSquareOutline from "../../src/components/MdiGamepadSquareOutline.vue";

test("MdiGamepadSquareOutline snapshot", () => {
  const wrapper = mount(MdiGamepadSquareOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
