
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketOutline from "../../src/components/MdiBasketOutline.vue";

test("MdiBasketOutline snapshot", () => {
  const wrapper = mount(MdiBasketOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
