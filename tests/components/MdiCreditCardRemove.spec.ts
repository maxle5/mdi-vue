
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardRemove from "../../src/components/MdiCreditCardRemove.vue";

test("MdiCreditCardRemove snapshot", () => {
  const wrapper = mount(MdiCreditCardRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
