
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceList from "../../src/components/MdiInvoiceList.vue";

test("MdiInvoiceList snapshot", () => {
  const wrapper = mount(MdiInvoiceList, {});
  expect(wrapper.html()).toMatchSnapshot();
});
