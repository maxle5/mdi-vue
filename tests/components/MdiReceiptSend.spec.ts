
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptSend from "../../src/components/MdiReceiptSend.vue";

test("MdiReceiptSend snapshot", () => {
  const wrapper = mount(MdiReceiptSend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
