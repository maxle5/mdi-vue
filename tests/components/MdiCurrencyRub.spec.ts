
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyRub from "../../src/components/MdiCurrencyRub.vue";

test("MdiCurrencyRub snapshot", () => {
  const wrapper = mount(MdiCurrencyRub, {});
  expect(wrapper.html()).toMatchSnapshot();
});
