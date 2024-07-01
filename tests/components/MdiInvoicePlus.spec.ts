
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoicePlus from "../../src/components/MdiInvoicePlus.vue";

test("MdiInvoicePlus snapshot", () => {
  const wrapper = mount(MdiInvoicePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
