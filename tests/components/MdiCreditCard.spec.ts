
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCard from "../../src/components/MdiCreditCard.vue";

test("MdiCreditCard snapshot", () => {
  const wrapper = mount(MdiCreditCard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
