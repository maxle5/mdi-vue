
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyJpy from "../../src/components/MdiCurrencyJpy.vue";

test("MdiCurrencyJpy snapshot", () => {
  const wrapper = mount(MdiCurrencyJpy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
