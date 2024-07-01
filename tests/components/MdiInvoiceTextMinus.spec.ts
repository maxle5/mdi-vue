
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextMinus from "../../src/components/MdiInvoiceTextMinus.vue";

test("MdiInvoiceTextMinus snapshot", () => {
  const wrapper = mount(MdiInvoiceTextMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
