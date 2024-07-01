
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyCny from "../../src/components/MdiCurrencyCny.vue";

test("MdiCurrencyCny snapshot", () => {
  const wrapper = mount(MdiCurrencyCny, {});
  expect(wrapper.html()).toMatchSnapshot();
});
