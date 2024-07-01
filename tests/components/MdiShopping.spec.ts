
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShopping from "../../src/components/MdiShopping.vue";

test("MdiShopping snapshot", () => {
  const wrapper = mount(MdiShopping, {});
  expect(wrapper.html()).toMatchSnapshot();
});
