
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextRemoveOutline from "../../src/components/MdiInvoiceTextRemoveOutline.vue";

test("MdiInvoiceTextRemoveOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
