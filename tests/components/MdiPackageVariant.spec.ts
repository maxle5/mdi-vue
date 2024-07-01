
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageVariant from "../../src/components/MdiPackageVariant.vue";

test("MdiPackageVariant snapshot", () => {
  const wrapper = mount(MdiPackageVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
