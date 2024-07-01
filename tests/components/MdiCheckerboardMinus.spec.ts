
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckerboardMinus from "../../src/components/MdiCheckerboardMinus.vue";

test("MdiCheckerboardMinus snapshot", () => {
  const wrapper = mount(MdiCheckerboardMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
