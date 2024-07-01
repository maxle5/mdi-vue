
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceArrowLeftOutline from "../../src/components/MdiInvoiceArrowLeftOutline.vue";

test("MdiInvoiceArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
