
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceMultiple from "../../src/components/MdiInvoiceMultiple.vue";

test("MdiInvoiceMultiple snapshot", () => {
  const wrapper = mount(MdiInvoiceMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
