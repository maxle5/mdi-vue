
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardMultiple from "../../src/components/MdiCreditCardMultiple.vue";

test("MdiCreditCardMultiple snapshot", () => {
  const wrapper = mount(MdiCreditCardMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
