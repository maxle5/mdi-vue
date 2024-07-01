
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCreditCard from "../../src/components/MdiAccountCreditCard.vue";

test("MdiAccountCreditCard snapshot", () => {
  const wrapper = mount(MdiAccountCreditCard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
