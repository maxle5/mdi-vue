
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardFastOutline from "../../src/components/MdiCreditCardFastOutline.vue";

test("MdiCreditCardFastOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardFastOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
