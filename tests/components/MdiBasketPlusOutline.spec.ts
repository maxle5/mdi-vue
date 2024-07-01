
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketPlusOutline from "../../src/components/MdiBasketPlusOutline.vue";

test("MdiBasketPlusOutline snapshot", () => {
  const wrapper = mount(MdiBasketPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
