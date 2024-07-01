
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartMinus from "../../src/components/MdiCartMinus.vue";

test("MdiCartMinus snapshot", () => {
  const wrapper = mount(MdiCartMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
