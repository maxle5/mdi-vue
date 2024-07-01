
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceOutline from "../../src/components/MdiInvoiceOutline.vue";

test("MdiInvoiceOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
