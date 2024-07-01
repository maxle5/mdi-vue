
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencySign from "../../src/components/MdiCurrencySign.vue";

test("MdiCurrencySign snapshot", () => {
  const wrapper = mount(MdiCurrencySign, {});
  expect(wrapper.html()).toMatchSnapshot();
});
