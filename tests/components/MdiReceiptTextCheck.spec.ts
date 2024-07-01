
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextCheck from "../../src/components/MdiReceiptTextCheck.vue";

test("MdiReceiptTextCheck snapshot", () => {
  const wrapper = mount(MdiReceiptTextCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
