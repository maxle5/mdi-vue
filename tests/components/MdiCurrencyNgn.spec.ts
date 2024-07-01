
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyNgn from "../../src/components/MdiCurrencyNgn.vue";

test("MdiCurrencyNgn snapshot", () => {
  const wrapper = mount(MdiCurrencyNgn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
