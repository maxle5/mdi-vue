
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextPlusOutline from "../../src/components/MdiReceiptTextPlusOutline.vue";

test("MdiReceiptTextPlusOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
