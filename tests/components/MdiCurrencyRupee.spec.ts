
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyRupee from "../../src/components/MdiCurrencyRupee.vue";

test("MdiCurrencyRupee snapshot", () => {
  const wrapper = mount(MdiCurrencyRupee, {});
  expect(wrapper.html()).toMatchSnapshot();
});
