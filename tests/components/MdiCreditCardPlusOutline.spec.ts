
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardPlusOutline from "../../src/components/MdiCreditCardPlusOutline.vue";

test("MdiCreditCardPlusOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
