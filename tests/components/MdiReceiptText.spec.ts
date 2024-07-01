
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptText from "../../src/components/MdiReceiptText.vue";

test("MdiReceiptText snapshot", () => {
  const wrapper = mount(MdiReceiptText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
