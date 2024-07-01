
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortBoolDescendingVariant from "../../src/components/MdiSortBoolDescendingVariant.vue";

test("MdiSortBoolDescendingVariant snapshot", () => {
  const wrapper = mount(MdiSortBoolDescendingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
