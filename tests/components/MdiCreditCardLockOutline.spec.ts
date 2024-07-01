
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardLockOutline from "../../src/components/MdiCreditCardLockOutline.vue";

test("MdiCreditCardLockOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
