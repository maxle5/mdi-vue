
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextMultiple from "../../src/components/MdiInvoiceTextMultiple.vue";

test("MdiInvoiceTextMultiple snapshot", () => {
  const wrapper = mount(MdiInvoiceTextMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
