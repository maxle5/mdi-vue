
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathIntegral from "../../src/components/MdiMathIntegral.vue";

test("MdiMathIntegral snapshot", () => {
  const wrapper = mount(MdiMathIntegral, {});
  expect(wrapper.html()).toMatchSnapshot();
});
