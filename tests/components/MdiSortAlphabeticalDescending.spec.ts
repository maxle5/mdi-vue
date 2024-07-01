
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortAlphabeticalDescending from "../../src/components/MdiSortAlphabeticalDescending.vue";

test("MdiSortAlphabeticalDescending snapshot", () => {
  const wrapper = mount(MdiSortAlphabeticalDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
