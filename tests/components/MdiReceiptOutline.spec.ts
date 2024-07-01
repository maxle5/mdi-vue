
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptOutline from "../../src/components/MdiReceiptOutline.vue";

test("MdiReceiptOutline snapshot", () => {
  const wrapper = mount(MdiReceiptOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
