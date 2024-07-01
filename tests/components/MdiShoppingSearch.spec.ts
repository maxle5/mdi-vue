
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoppingSearch from "../../src/components/MdiShoppingSearch.vue";

test("MdiShoppingSearch snapshot", () => {
  const wrapper = mount(MdiShoppingSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
