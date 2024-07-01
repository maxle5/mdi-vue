
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextArrowRightOutline from "../../src/components/MdiInvoiceTextArrowRightOutline.vue";

test("MdiInvoiceTextArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
