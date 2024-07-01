
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextMinus from "../../src/components/MdiReceiptTextMinus.vue";

test("MdiReceiptTextMinus snapshot", () => {
  const wrapper = mount(MdiReceiptTextMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
