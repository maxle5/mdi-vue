
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextArrowRight from "../../src/components/MdiInvoiceTextArrowRight.vue";

test("MdiInvoiceTextArrowRight snapshot", () => {
  const wrapper = mount(MdiInvoiceTextArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
