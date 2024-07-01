
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterVariantMinus from "../../src/components/MdiFilterVariantMinus.vue";

test("MdiFilterVariantMinus snapshot", () => {
  const wrapper = mount(MdiFilterVariantMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
