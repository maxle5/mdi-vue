
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortVariantLockOpen from "../../src/components/MdiSortVariantLockOpen.vue";

test("MdiSortVariantLockOpen snapshot", () => {
  const wrapper = mount(MdiSortVariantLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
