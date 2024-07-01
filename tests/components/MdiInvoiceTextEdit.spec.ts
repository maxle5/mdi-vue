
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextEdit from "../../src/components/MdiInvoiceTextEdit.vue";

test("MdiInvoiceTextEdit snapshot", () => {
  const wrapper = mount(MdiInvoiceTextEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
