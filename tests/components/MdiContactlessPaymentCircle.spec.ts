
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContactlessPaymentCircle from "../../src/components/MdiContactlessPaymentCircle.vue";

test("MdiContactlessPaymentCircle snapshot", () => {
  const wrapper = mount(MdiContactlessPaymentCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
