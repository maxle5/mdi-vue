
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardWirelessOff from "../../src/components/MdiCreditCardWirelessOff.vue";

test("MdiCreditCardWirelessOff snapshot", () => {
  const wrapper = mount(MdiCreditCardWirelessOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
