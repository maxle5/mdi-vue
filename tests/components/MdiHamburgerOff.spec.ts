
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHamburgerOff from "../../src/components/MdiHamburgerOff.vue";

test("MdiHamburgerOff snapshot", () => {
  const wrapper = mount(MdiHamburgerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
