
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyFra from "../../src/components/MdiCurrencyFra.vue";

test("MdiCurrencyFra snapshot", () => {
  const wrapper = mount(MdiCurrencyFra, {});
  expect(wrapper.html()).toMatchSnapshot();
});
