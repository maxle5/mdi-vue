
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketUnfill from "../../src/components/MdiBasketUnfill.vue";

test("MdiBasketUnfill snapshot", () => {
  const wrapper = mount(MdiBasketUnfill, {});
  expect(wrapper.html()).toMatchSnapshot();
});
