
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyEur from "../../src/components/MdiCurrencyEur.vue";

test("MdiCurrencyEur snapshot", () => {
  const wrapper = mount(MdiCurrencyEur, {});
  expect(wrapper.html()).toMatchSnapshot();
});
