
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTabMinus from "../../src/components/MdiTabMinus.vue";

test("MdiTabMinus snapshot", () => {
  const wrapper = mount(MdiTabMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
