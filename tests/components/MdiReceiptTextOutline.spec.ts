
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextOutline from "../../src/components/MdiReceiptTextOutline.vue";

test("MdiReceiptTextOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
