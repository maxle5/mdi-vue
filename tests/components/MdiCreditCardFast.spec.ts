
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardFast from "../../src/components/MdiCreditCardFast.vue";

test("MdiCreditCardFast snapshot", () => {
  const wrapper = mount(MdiCreditCardFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
