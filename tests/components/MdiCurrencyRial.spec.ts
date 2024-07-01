
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyRial from "../../src/components/MdiCurrencyRial.vue";

test("MdiCurrencyRial snapshot", () => {
  const wrapper = mount(MdiCurrencyRial, {});
  expect(wrapper.html()).toMatchSnapshot();
});
