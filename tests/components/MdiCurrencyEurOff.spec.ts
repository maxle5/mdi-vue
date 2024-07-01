
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyEurOff from "../../src/components/MdiCurrencyEurOff.vue";

test("MdiCurrencyEurOff snapshot", () => {
  const wrapper = mount(MdiCurrencyEurOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
