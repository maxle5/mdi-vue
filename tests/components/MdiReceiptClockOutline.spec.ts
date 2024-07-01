
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptClockOutline from "../../src/components/MdiReceiptClockOutline.vue";

test("MdiReceiptClockOutline snapshot", () => {
  const wrapper = mount(MdiReceiptClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
