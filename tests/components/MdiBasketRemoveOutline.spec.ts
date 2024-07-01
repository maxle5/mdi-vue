
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketRemoveOutline from "../../src/components/MdiBasketRemoveOutline.vue";

test("MdiBasketRemoveOutline snapshot", () => {
  const wrapper = mount(MdiBasketRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
