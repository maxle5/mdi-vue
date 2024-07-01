
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSolarPowerVariantOutline from "../../src/components/MdiSolarPowerVariantOutline.vue";

test("MdiSolarPowerVariantOutline snapshot", () => {
  const wrapper = mount(MdiSolarPowerVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
