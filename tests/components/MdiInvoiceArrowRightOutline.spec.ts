
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceArrowRightOutline from "../../src/components/MdiInvoiceArrowRightOutline.vue";

test("MdiInvoiceArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
