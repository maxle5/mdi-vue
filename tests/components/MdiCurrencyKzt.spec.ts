
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyKzt from "../../src/components/MdiCurrencyKzt.vue";

test("MdiCurrencyKzt snapshot", () => {
  const wrapper = mount(MdiCurrencyKzt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
