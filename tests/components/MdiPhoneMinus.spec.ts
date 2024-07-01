
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneMinus from "../../src/components/MdiPhoneMinus.vue";

test("MdiPhoneMinus snapshot", () => {
  const wrapper = mount(MdiPhoneMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
