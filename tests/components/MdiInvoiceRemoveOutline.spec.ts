
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceRemoveOutline from "../../src/components/MdiInvoiceRemoveOutline.vue";

test("MdiInvoiceRemoveOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
