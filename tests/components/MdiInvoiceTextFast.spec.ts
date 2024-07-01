
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextFast from "../../src/components/MdiInvoiceTextFast.vue";

test("MdiInvoiceTextFast snapshot", () => {
  const wrapper = mount(MdiInvoiceTextFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
