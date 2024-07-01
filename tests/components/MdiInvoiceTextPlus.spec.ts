
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextPlus from "../../src/components/MdiInvoiceTextPlus.vue";

test("MdiInvoiceTextPlus snapshot", () => {
  const wrapper = mount(MdiInvoiceTextPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
