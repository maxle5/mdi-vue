
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariantClosedMinus from "../../src/components/MdiPackageVariantClosedMinus.vue";

test("MdiPackageVariantClosedMinus snapshot", () => {
  const wrapper = mount(MdiPackageVariantClosedMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
