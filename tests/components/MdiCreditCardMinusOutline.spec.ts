
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardMinusOutline from "../../src/components/MdiCreditCardMinusOutline.vue";

test("MdiCreditCardMinusOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
