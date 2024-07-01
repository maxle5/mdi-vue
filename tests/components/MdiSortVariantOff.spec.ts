
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortVariantOff from "../../src/components/MdiSortVariantOff.vue";

test("MdiSortVariantOff snapshot", () => {
  const wrapper = mount(MdiSortVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
