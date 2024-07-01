
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardRemoveOutline from "../../src/components/MdiCreditCardRemoveOutline.vue";

test("MdiCreditCardRemoveOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
