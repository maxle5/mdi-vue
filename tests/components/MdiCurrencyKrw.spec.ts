
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyKrw from "../../src/components/MdiCurrencyKrw.vue";

test("MdiCurrencyKrw snapshot", () => {
  const wrapper = mount(MdiCurrencyKrw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
