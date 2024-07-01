
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextEdit from "../../src/components/MdiReceiptTextEdit.vue";

test("MdiReceiptTextEdit snapshot", () => {
  const wrapper = mount(MdiReceiptTextEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
