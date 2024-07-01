
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterMinus from "../../src/components/MdiWaterMinus.vue";

test("MdiWaterMinus snapshot", () => {
  const wrapper = mount(MdiWaterMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
