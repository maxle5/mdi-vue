
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextCheckOutline from "../../src/components/MdiReceiptTextCheckOutline.vue";

test("MdiReceiptTextCheckOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
