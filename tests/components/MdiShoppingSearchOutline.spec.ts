
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoppingSearchOutline from "../../src/components/MdiShoppingSearchOutline.vue";

test("MdiShoppingSearchOutline snapshot", () => {
  const wrapper = mount(MdiShoppingSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
