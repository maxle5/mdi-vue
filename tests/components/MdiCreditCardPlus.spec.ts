
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardPlus from "../../src/components/MdiCreditCardPlus.vue";

test("MdiCreditCardPlus snapshot", () => {
  const wrapper = mount(MdiCreditCardPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
