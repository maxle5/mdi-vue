
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyBtc from "../../src/components/MdiCurrencyBtc.vue";

test("MdiCurrencyBtc snapshot", () => {
  const wrapper = mount(MdiCurrencyBtc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
