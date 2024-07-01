
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariantClosedCheck from "../../src/components/MdiPackageVariantClosedCheck.vue";

test("MdiPackageVariantClosedCheck snapshot", () => {
  const wrapper = mount(MdiPackageVariantClosedCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
