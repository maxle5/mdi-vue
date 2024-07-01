
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceMultipleOutline from "../../src/components/MdiInvoiceMultipleOutline.vue";

test("MdiInvoiceMultipleOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
