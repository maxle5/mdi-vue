
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceListOutline from "../../src/components/MdiInvoiceListOutline.vue";

test("MdiInvoiceListOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceListOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
