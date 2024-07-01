
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortAlphabeticalAscending from "../../src/components/MdiSortAlphabeticalAscending.vue";

test("MdiSortAlphabeticalAscending snapshot", () => {
  const wrapper = mount(MdiSortAlphabeticalAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
