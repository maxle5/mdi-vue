
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceFastOutline from "../../src/components/MdiInvoiceFastOutline.vue";

test("MdiInvoiceFastOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceFastOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
