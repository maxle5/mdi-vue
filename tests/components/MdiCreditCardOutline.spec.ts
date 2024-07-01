
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardOutline from "../../src/components/MdiCreditCardOutline.vue";

test("MdiCreditCardOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
