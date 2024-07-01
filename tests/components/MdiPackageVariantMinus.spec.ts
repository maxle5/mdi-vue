
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariantMinus from "../../src/components/MdiPackageVariantMinus.vue";

test("MdiPackageVariantMinus snapshot", () => {
  const wrapper = mount(MdiPackageVariantMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
