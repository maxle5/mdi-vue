
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardWirelessOutline from "../../src/components/MdiCreditCardWirelessOutline.vue";

test("MdiCreditCardWirelessOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardWirelessOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
