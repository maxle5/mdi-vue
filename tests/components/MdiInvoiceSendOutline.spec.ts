
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoiceSendOutline from "../../src/components/MdiInvoiceSendOutline.vue";

test("MdiInvoiceSendOutline snapshot", () => {
  const wrapper = mount(MdiInvoiceSendOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
