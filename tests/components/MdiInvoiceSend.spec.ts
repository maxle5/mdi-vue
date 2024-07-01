
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceSend from "../../src/components/MdiInvoiceSend.vue";

test("MdiInvoiceSend snapshot", () => {
  const wrapper = mount(MdiInvoiceSend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
