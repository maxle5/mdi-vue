
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyPhp from "../../src/components/MdiCurrencyPhp.vue";

test("MdiCurrencyPhp snapshot", () => {
  const wrapper = mount(MdiCurrencyPhp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
