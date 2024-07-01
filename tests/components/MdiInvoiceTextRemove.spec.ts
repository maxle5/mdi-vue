
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextRemove from "../../src/components/MdiInvoiceTextRemove.vue";

test("MdiInvoiceTextRemove snapshot", () => {
  const wrapper = mount(MdiInvoiceTextRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
