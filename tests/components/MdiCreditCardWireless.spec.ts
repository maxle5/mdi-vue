
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardWireless from "../../src/components/MdiCreditCardWireless.vue";

test("MdiCreditCardWireless snapshot", () => {
  const wrapper = mount(MdiCreditCardWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
