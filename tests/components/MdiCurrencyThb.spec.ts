
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyThb from "../../src/components/MdiCurrencyThb.vue";

test("MdiCurrencyThb snapshot", () => {
  const wrapper = mount(MdiCurrencyThb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
