
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardLock from "../../src/components/MdiCreditCardLock.vue";

test("MdiCreditCardLock snapshot", () => {
  const wrapper = mount(MdiCreditCardLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
