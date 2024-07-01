
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceImportOutline from "../../src/components/MdiInvoiceImportOutline.vue";

test("MdiInvoiceImportOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceImportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
