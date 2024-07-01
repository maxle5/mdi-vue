
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceEdit from "../../src/components/MdiInvoiceEdit.vue";

test("MdiInvoiceEdit snapshot", () => {
  const wrapper = mount(MdiInvoiceEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
