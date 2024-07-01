
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDecimalIncrease from "../../src/components/MdiDecimalIncrease.vue";

test("MdiDecimalIncrease snapshot", () => {
  const wrapper = mount(MdiDecimalIncrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
