
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextOutline from "../../src/components/MdiInvoiceTextOutline.vue";

test("MdiInvoiceTextOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
