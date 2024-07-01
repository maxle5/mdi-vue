
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptSendOutline from "../../src/components/MdiReceiptSendOutline.vue";

test("MdiReceiptSendOutline snapshot", () => {
  const wrapper = mount(MdiReceiptSendOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
