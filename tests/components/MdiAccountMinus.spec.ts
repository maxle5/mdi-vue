
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMinus from "../../src/components/MdiAccountMinus.vue";

test("MdiAccountMinus snapshot", () => {
  const wrapper = mount(MdiAccountMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
