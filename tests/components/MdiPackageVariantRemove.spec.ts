
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariantRemove from "../../src/components/MdiPackageVariantRemove.vue";

test("MdiPackageVariantRemove snapshot", () => {
  const wrapper = mount(MdiPackageVariantRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
