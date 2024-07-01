
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortBoolAscendingVariant from "../../src/components/MdiSortBoolAscendingVariant.vue";

test("MdiSortBoolAscendingVariant snapshot", () => {
  const wrapper = mount(MdiSortBoolAscendingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
