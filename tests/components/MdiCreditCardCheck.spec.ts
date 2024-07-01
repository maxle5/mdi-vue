
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardCheck from "../../src/components/MdiCreditCardCheck.vue";

test("MdiCreditCardCheck snapshot", () => {
  const wrapper = mount(MdiCreditCardCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
