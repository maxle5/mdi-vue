
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketMinus from "../../src/components/MdiBasketMinus.vue";

test("MdiBasketMinus snapshot", () => {
  const wrapper = mount(MdiBasketMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
