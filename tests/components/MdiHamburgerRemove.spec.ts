
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHamburgerRemove from "../../src/components/MdiHamburgerRemove.vue";

test("MdiHamburgerRemove snapshot", () => {
  const wrapper = mount(MdiHamburgerRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
