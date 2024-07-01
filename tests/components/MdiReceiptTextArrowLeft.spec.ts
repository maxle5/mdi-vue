
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextArrowLeft from "../../src/components/MdiReceiptTextArrowLeft.vue";

test("MdiReceiptTextArrowLeft snapshot", () => {
  const wrapper = mount(MdiReceiptTextArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
