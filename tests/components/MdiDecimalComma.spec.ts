
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDecimalComma from "../../src/components/MdiDecimalComma.vue";

test("MdiDecimalComma snapshot", () => {
  const wrapper = mount(MdiDecimalComma, {});
  expect(wrapper.html()).toMatchSnapshot();
});
