
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardMinus from "../../src/components/MdiCreditCardMinus.vue";

test("MdiCreditCardMinus snapshot", () => {
  const wrapper = mount(MdiCreditCardMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
