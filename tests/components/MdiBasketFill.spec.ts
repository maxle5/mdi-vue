
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketFill from "../../src/components/MdiBasketFill.vue";

test("MdiBasketFill snapshot", () => {
  const wrapper = mount(MdiBasketFill, {});
  expect(wrapper.html()).toMatchSnapshot();
});
