
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyUsdOff from "../../src/components/MdiCurrencyUsdOff.vue";

test("MdiCurrencyUsdOff snapshot", () => {
  const wrapper = mount(MdiCurrencyUsdOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
