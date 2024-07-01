
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceRemove from "../../src/components/MdiInvoiceRemove.vue";

test("MdiInvoiceRemove snapshot", () => {
  const wrapper = mount(MdiInvoiceRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
