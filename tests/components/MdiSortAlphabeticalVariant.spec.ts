
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortAlphabeticalVariant from "../../src/components/MdiSortAlphabeticalVariant.vue";

test("MdiSortAlphabeticalVariant snapshot", () => {
  const wrapper = mount(MdiSortAlphabeticalVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
