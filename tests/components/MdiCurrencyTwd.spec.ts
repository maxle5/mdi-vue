
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyTwd from "../../src/components/MdiCurrencyTwd.vue";

test("MdiCurrencyTwd snapshot", () => {
  const wrapper = mount(MdiCurrencyTwd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
