
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariantClosed from "../../src/components/MdiPackageVariantClosed.vue";

test("MdiPackageVariantClosed snapshot", () => {
  const wrapper = mount(MdiPackageVariantClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
