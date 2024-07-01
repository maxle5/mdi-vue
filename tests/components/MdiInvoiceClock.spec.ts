
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceClock from "../../src/components/MdiInvoiceClock.vue";

test("MdiInvoiceClock snapshot", () => {
  const wrapper = mount(MdiInvoiceClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
