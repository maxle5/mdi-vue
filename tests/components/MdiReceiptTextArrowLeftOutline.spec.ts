
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextArrowLeftOutline from "../../src/components/MdiReceiptTextArrowLeftOutline.vue";

test("MdiReceiptTextArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
