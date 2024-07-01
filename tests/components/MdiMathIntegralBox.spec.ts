
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathIntegralBox from "../../src/components/MdiMathIntegralBox.vue";

test("MdiMathIntegralBox snapshot", () => {
  const wrapper = mount(MdiMathIntegralBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
