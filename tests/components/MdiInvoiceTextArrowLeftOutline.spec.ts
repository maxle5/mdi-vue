
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextArrowLeftOutline from "../../src/components/MdiInvoiceTextArrowLeftOutline.vue";

test("MdiInvoiceTextArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
