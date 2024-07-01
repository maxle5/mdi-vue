
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceArrowLeft from "../../src/components/MdiInvoiceArrowLeft.vue";

test("MdiInvoiceArrowLeft snapshot", () => {
  const wrapper = mount(MdiInvoiceArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
