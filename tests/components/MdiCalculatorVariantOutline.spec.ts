
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalculatorVariantOutline from "../../src/components/MdiCalculatorVariantOutline.vue";

test("MdiCalculatorVariantOutline snapshot", () => {
  const wrapper = mount(MdiCalculatorVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
