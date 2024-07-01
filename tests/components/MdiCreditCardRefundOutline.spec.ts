
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardRefundOutline from "../../src/components/MdiCreditCardRefundOutline.vue";

test("MdiCreditCardRefundOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardRefundOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
