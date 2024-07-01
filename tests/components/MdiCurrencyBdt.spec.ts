
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyBdt from "../../src/components/MdiCurrencyBdt.vue";

test("MdiCurrencyBdt snapshot", () => {
  const wrapper = mount(MdiCurrencyBdt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
