
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardMultipleOutline from "../../src/components/MdiCreditCardMultipleOutline.vue";

test("MdiCreditCardMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
