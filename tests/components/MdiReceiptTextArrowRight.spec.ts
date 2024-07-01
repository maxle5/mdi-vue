
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextArrowRight from "../../src/components/MdiReceiptTextArrowRight.vue";

test("MdiReceiptTextArrowRight snapshot", () => {
  const wrapper = mount(MdiReceiptTextArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
