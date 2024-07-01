
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketCheckOutline from "../../src/components/MdiBasketCheckOutline.vue";

test("MdiBasketCheckOutline snapshot", () => {
  const wrapper = mount(MdiBasketCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
