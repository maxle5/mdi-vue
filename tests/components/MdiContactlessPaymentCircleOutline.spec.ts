
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContactlessPaymentCircleOutline from "../../src/components/MdiContactlessPaymentCircleOutline.vue";

test("MdiContactlessPaymentCircleOutline snapshot", () => {
  const wrapper = mount(MdiContactlessPaymentCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
