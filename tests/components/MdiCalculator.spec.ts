
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalculator from "../../src/components/MdiCalculator.vue";

test("MdiCalculator snapshot", () => {
  const wrapper = mount(MdiCalculator, {});
  expect(wrapper.html()).toMatchSnapshot();
});
