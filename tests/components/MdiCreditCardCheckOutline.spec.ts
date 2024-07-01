
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardCheckOutline from "../../src/components/MdiCreditCardCheckOutline.vue";

test("MdiCreditCardCheckOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
