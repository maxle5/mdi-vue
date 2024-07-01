
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashMinus from "../../src/components/MdiCashMinus.vue";

test("MdiCashMinus snapshot", () => {
  const wrapper = mount(MdiCashMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
