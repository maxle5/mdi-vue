
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextPlusOutline from "../../src/components/MdiInvoiceTextPlusOutline.vue";

test("MdiInvoiceTextPlusOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
