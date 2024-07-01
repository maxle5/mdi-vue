
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyTry from "../../src/components/MdiCurrencyTry.vue";

test("MdiCurrencyTry snapshot", () => {
  const wrapper = mount(MdiCurrencyTry, {});
  expect(wrapper.html()).toMatchSnapshot();
});
