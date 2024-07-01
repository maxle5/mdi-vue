
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyUsd from "../../src/components/MdiCurrencyUsd.vue";

test("MdiCurrencyUsd snapshot", () => {
  const wrapper = mount(MdiCurrencyUsd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
