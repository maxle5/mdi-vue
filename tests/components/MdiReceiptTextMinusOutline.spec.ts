
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextMinusOutline from "../../src/components/MdiReceiptTextMinusOutline.vue";

test("MdiReceiptTextMinusOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
