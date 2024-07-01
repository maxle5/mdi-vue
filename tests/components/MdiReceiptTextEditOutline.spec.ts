
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextEditOutline from "../../src/components/MdiReceiptTextEditOutline.vue";

test("MdiReceiptTextEditOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
