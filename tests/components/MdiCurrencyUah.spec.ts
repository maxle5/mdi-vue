
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyUah from "../../src/components/MdiCurrencyUah.vue";

test("MdiCurrencyUah snapshot", () => {
  const wrapper = mount(MdiCurrencyUah, {});
  expect(wrapper.html()).toMatchSnapshot();
});
