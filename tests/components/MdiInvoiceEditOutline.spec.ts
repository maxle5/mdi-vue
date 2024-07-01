
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceEditOutline from "../../src/components/MdiInvoiceEditOutline.vue";

test("MdiInvoiceEditOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
