
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCreditCardOutline from "../../src/components/MdiAccountCreditCardOutline.vue";

test("MdiAccountCreditCardOutline snapshot", () => {
  const wrapper = mount(MdiAccountCreditCardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
