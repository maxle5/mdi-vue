
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortAlphabeticalDescendingVariant from "../../src/components/MdiSortAlphabeticalDescendingVariant.vue";

test("MdiSortAlphabeticalDescendingVariant snapshot", () => {
  const wrapper = mount(MdiSortAlphabeticalDescendingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
