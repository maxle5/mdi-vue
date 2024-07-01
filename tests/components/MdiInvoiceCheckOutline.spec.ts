
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceCheckOutline from "../../src/components/MdiInvoiceCheckOutline.vue";

test("MdiInvoiceCheckOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
