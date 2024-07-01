
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvoice from "../../src/components/MdiInvoice.vue";

test("MdiInvoice snapshot", () => {
  const wrapper = mount(MdiInvoice, {});
  expect(wrapper.html()).toMatchSnapshot();
});
