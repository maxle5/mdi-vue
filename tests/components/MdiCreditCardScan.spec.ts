
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardScan from "../../src/components/MdiCreditCardScan.vue";

test("MdiCreditCardScan snapshot", () => {
  const wrapper = mount(MdiCreditCardScan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
