
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceImport from "../../src/components/MdiInvoiceImport.vue";

test("MdiInvoiceImport snapshot", () => {
  const wrapper = mount(MdiInvoiceImport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
