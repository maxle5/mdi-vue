
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextClockOutline from "../../src/components/MdiReceiptTextClockOutline.vue";

test("MdiReceiptTextClockOutline snapshot", () => {
  const wrapper = mount(MdiReceiptTextClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
