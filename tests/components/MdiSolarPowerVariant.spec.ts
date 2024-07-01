
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSolarPowerVariant from "../../src/components/MdiSolarPowerVariant.vue";

test("MdiSolarPowerVariant snapshot", () => {
  const wrapper = mount(MdiSolarPowerVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
