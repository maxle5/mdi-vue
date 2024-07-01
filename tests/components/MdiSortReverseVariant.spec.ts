
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortReverseVariant from "../../src/components/MdiSortReverseVariant.vue";

test("MdiSortReverseVariant snapshot", () => {
  const wrapper = mount(MdiSortReverseVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
