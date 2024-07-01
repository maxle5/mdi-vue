
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariantClosedPlus from "../../src/components/MdiPackageVariantClosedPlus.vue";

test("MdiPackageVariantClosedPlus snapshot", () => {
  const wrapper = mount(MdiPackageVariantClosedPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
