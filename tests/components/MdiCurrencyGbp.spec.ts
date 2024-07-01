
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyGbp from "../../src/components/MdiCurrencyGbp.vue";

test("MdiCurrencyGbp snapshot", () => {
  const wrapper = mount(MdiCurrencyGbp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
