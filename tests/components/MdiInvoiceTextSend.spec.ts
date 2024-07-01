
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextSend from "../../src/components/MdiInvoiceTextSend.vue";

test("MdiInvoiceTextSend snapshot", () => {
  const wrapper = mount(MdiInvoiceTextSend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
