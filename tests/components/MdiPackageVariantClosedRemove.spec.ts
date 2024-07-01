
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariantClosedRemove from "../../src/components/MdiPackageVariantClosedRemove.vue";

test("MdiPackageVariantClosedRemove snapshot", () => {
  const wrapper = mount(MdiPackageVariantClosedRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
