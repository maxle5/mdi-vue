
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCart from "../../src/components/MdiCart.vue";

test("MdiCart snapshot", () => {
  const wrapper = mount(MdiCart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
