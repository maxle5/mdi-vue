
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardWirelessOffOutline from "../../src/components/MdiCreditCardWirelessOffOutline.vue";

test("MdiCreditCardWirelessOffOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardWirelessOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
