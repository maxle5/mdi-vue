
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceCheck from "../../src/components/MdiInvoiceCheck.vue";

test("MdiInvoiceCheck snapshot", () => {
  const wrapper = mount(MdiInvoiceCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
