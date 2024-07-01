
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunglasses from "../../src/components/MdiSunglasses.vue";

test("MdiSunglasses snapshot", () => {
  const wrapper = mount(MdiSunglasses, {});
  expect(wrapper.html()).toMatchSnapshot();
});
