
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortVariantRemove from "../../src/components/MdiSortVariantRemove.vue";

test("MdiSortVariantRemove snapshot", () => {
  const wrapper = mount(MdiSortVariantRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
