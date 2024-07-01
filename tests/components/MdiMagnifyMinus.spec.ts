
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyMinus from "../../src/components/MdiMagnifyMinus.vue";

test("MdiMagnifyMinus snapshot", () => {
  const wrapper = mount(MdiMagnifyMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
