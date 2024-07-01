
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyEth from "../../src/components/MdiCurrencyEth.vue";

test("MdiCurrencyEth snapshot", () => {
  const wrapper = mount(MdiCurrencyEth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
