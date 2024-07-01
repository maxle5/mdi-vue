
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDecimalCommaIncrease from "../../src/components/MdiDecimalCommaIncrease.vue";

test("MdiDecimalCommaIncrease snapshot", () => {
  const wrapper = mount(MdiDecimalCommaIncrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
