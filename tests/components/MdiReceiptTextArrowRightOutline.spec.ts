
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextArrowRightOutline from "../../src/components/MdiReceiptTextArrowRightOutline.vue";

test("MdiReceiptTextArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
