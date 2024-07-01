
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextSendOutline from "../../src/components/MdiInvoiceTextSendOutline.vue";

test("MdiInvoiceTextSendOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextSendOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
