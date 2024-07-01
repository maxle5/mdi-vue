
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextFastOutline from "../../src/components/MdiInvoiceTextFastOutline.vue";

test("MdiInvoiceTextFastOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceTextFastOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
