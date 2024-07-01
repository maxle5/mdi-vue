
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardRefund from "../../src/components/MdiCreditCardRefund.vue";

test("MdiCreditCardRefund snapshot", () => {
  const wrapper = mount(MdiCreditCardRefund, {});
  expect(wrapper.html()).toMatchSnapshot();
});
