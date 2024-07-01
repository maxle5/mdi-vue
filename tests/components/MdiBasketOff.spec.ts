
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketOff from "../../src/components/MdiBasketOff.vue";

test("MdiBasketOff snapshot", () => {
  const wrapper = mount(MdiBasketOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
