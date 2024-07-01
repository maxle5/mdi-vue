
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortVariantLock from "../../src/components/MdiSortVariantLock.vue";

test("MdiSortVariantLock snapshot", () => {
  const wrapper = mount(MdiSortVariantLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
