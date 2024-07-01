
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariantPlus from "../../src/components/MdiPackageVariantPlus.vue";

test("MdiPackageVariantPlus snapshot", () => {
  const wrapper = mount(MdiPackageVariantPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
