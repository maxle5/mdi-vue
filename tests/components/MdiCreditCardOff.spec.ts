
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardOff from "../../src/components/MdiCreditCardOff.vue";

test("MdiCreditCardOff snapshot", () => {
  const wrapper = mount(MdiCreditCardOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
