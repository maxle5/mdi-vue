
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalculatorVariant from "../../src/components/MdiCalculatorVariant.vue";

test("MdiCalculatorVariant snapshot", () => {
  const wrapper = mount(MdiCalculatorVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
