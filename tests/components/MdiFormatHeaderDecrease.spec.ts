
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeaderDecrease from "../../src/components/MdiFormatHeaderDecrease.vue";

test("MdiFormatHeaderDecrease snapshot", () => {
  const wrapper = mount(MdiFormatHeaderDecrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
