
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDecimalCommaDecrease from "../../src/components/MdiDecimalCommaDecrease.vue";

test("MdiDecimalCommaDecrease snapshot", () => {
  const wrapper = mount(MdiDecimalCommaDecrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
