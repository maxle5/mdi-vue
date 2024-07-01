
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardClockOutline from "../../src/components/MdiCreditCardClockOutline.vue";

test("MdiCreditCardClockOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
