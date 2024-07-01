
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHamburgerCheck from "../../src/components/MdiHamburgerCheck.vue";

test("MdiHamburgerCheck snapshot", () => {
  const wrapper = mount(MdiHamburgerCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
