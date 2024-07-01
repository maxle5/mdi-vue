
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextEditOutline from "../../src/components/MdiInvoiceTextEditOutline.vue";

test("MdiInvoiceTextEditOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
