
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyMnt from "../../src/components/MdiCurrencyMnt.vue";

test("MdiCurrencyMnt snapshot", () => {
  const wrapper = mount(MdiCurrencyMnt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
