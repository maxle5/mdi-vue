
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextSend from "../../src/components/MdiReceiptTextSend.vue";

test("MdiReceiptTextSend snapshot", () => {
  const wrapper = mount(MdiReceiptTextSend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
