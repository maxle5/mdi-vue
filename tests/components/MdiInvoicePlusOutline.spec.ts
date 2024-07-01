
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoicePlusOutline from "../../src/components/MdiInvoicePlusOutline.vue";

test("MdiInvoicePlusOutline snapshot", () => {
  const wrapper = mount(MdiInvoicePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
