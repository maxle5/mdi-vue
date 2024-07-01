
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextMultipleOutline from "../../src/components/MdiInvoiceTextMultipleOutline.vue";

test("MdiInvoiceTextMultipleOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
