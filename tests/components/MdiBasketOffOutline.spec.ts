
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketOffOutline from "../../src/components/MdiBasketOffOutline.vue";

test("MdiBasketOffOutline snapshot", () => {
  const wrapper = mount(MdiBasketOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
