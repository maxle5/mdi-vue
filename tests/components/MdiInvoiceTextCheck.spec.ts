
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextCheck from "../../src/components/MdiInvoiceTextCheck.vue";

test("MdiInvoiceTextCheck snapshot", () => {
  const wrapper = mount(MdiInvoiceTextCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
