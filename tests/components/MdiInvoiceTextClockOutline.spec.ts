
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextClockOutline from "../../src/components/MdiInvoiceTextClockOutline.vue";

test("MdiInvoiceTextClockOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
