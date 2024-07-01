
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHamburgerMinus from "../../src/components/MdiHamburgerMinus.vue";

test("MdiHamburgerMinus snapshot", () => {
  const wrapper = mount(MdiHamburgerMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
