
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketRemove from "../../src/components/MdiBasketRemove.vue";

test("MdiBasketRemove snapshot", () => {
  const wrapper = mount(MdiBasketRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
