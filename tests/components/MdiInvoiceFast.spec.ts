
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceFast from "../../src/components/MdiInvoiceFast.vue";

test("MdiInvoiceFast snapshot", () => {
  const wrapper = mount(MdiInvoiceFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
