
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextSendOutline from "../../src/components/MdiReceiptTextSendOutline.vue";

test("MdiReceiptTextSendOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextSendOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
