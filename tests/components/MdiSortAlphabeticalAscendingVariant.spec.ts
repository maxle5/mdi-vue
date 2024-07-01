
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortAlphabeticalAscendingVariant from "../../src/components/MdiSortAlphabeticalAscendingVariant.vue";

test("MdiSortAlphabeticalAscendingVariant snapshot", () => {
  const wrapper = mount(MdiSortAlphabeticalAscendingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
