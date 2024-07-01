
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceText from "../../src/components/MdiInvoiceText.vue";

test("MdiInvoiceText snapshot", () => {
  const wrapper = mount(MdiInvoiceText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
