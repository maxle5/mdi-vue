
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDecimalDecrease from "../../src/components/MdiDecimalDecrease.vue";

test("MdiDecimalDecrease snapshot", () => {
  const wrapper = mount(MdiDecimalDecrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
