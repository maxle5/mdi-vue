
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortNumericDescendingVariant from "../../src/components/MdiSortNumericDescendingVariant.vue";

test("MdiSortNumericDescendingVariant snapshot", () => {
  const wrapper = mount(MdiSortNumericDescendingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
