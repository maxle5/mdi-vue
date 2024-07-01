
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieMinus from "../../src/components/MdiCookieMinus.vue";

test("MdiCookieMinus snapshot", () => {
  const wrapper = mount(MdiCookieMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
