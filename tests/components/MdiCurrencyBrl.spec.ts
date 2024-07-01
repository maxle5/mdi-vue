
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyBrl from "../../src/components/MdiCurrencyBrl.vue";

test("MdiCurrencyBrl snapshot", () => {
  const wrapper = mount(MdiCurrencyBrl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
