
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceClockOutline from "../../src/components/MdiInvoiceClockOutline.vue";

test("MdiInvoiceClockOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
