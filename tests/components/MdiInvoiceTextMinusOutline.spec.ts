
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextMinusOutline from "../../src/components/MdiInvoiceTextMinusOutline.vue";

test("MdiInvoiceTextMinusOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
