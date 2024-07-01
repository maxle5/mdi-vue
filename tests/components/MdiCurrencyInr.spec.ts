
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyInr from "../../src/components/MdiCurrencyInr.vue";

test("MdiCurrencyInr snapshot", () => {
  const wrapper = mount(MdiCurrencyInr, {});
  expect(wrapper.html()).toMatchSnapshot();
});
