
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceArrowRight from "../../src/components/MdiInvoiceArrowRight.vue";

test("MdiInvoiceArrowRight snapshot", () => {
  const wrapper = mount(MdiInvoiceArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
