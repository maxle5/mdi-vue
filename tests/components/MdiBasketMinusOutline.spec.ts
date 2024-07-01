
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketMinusOutline from "../../src/components/MdiBasketMinusOutline.vue";

test("MdiBasketMinusOutline snapshot", () => {
  const wrapper = mount(MdiBasketMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
