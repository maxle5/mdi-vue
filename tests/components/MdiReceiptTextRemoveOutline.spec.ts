
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextRemoveOutline from "../../src/components/MdiReceiptTextRemoveOutline.vue";

test("MdiReceiptTextRemoveOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
