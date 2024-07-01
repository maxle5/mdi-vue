
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceTextClock from "../../src/components/MdiInvoiceTextClock.vue";

test("MdiInvoiceTextClock snapshot", () => {
  const wrapper = mount(MdiInvoiceTextClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
