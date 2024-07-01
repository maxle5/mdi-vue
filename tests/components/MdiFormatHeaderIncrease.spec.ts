
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeaderIncrease from "../../src/components/MdiFormatHeaderIncrease.vue";

test("MdiFormatHeaderIncrease snapshot", () => {
  const wrapper = mount(MdiFormatHeaderIncrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
