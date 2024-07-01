
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextRemove from "../../src/components/MdiReceiptTextRemove.vue";

test("MdiReceiptTextRemove snapshot", () => {
  const wrapper = mount(MdiReceiptTextRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
