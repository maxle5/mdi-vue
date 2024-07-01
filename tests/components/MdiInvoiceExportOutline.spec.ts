
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceExportOutline from "../../src/components/MdiInvoiceExportOutline.vue";

test("MdiInvoiceExportOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceExportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
