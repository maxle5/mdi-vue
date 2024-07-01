
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextCheckOutline from "../../src/components/MdiInvoiceTextCheckOutline.vue";

test("MdiInvoiceTextCheckOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
