
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketPlus from "../../src/components/MdiBasketPlus.vue";

test("MdiBasketPlus snapshot", () => {
  const wrapper = mount(MdiBasketPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
