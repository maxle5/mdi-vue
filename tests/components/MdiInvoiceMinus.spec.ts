
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceMinus from "../../src/components/MdiInvoiceMinus.vue";

test("MdiInvoiceMinus snapshot", () => {
  const wrapper = mount(MdiInvoiceMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
