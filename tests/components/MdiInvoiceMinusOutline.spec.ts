
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceMinusOutline from "../../src/components/MdiInvoiceMinusOutline.vue";

test("MdiInvoiceMinusOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
