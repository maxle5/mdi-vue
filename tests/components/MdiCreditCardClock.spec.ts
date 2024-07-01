
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardClock from "../../src/components/MdiCreditCardClock.vue";

test("MdiCreditCardClock snapshot", () => {
  const wrapper = mount(MdiCreditCardClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
