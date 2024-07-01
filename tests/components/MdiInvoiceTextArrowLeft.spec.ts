
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextArrowLeft from "../../src/components/MdiInvoiceTextArrowLeft.vue";

test("MdiInvoiceTextArrowLeft snapshot", () => {
  const wrapper = mount(MdiInvoiceTextArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
