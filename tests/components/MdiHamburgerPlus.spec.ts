
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHamburgerPlus from "../../src/components/MdiHamburgerPlus.vue";

test("MdiHamburgerPlus snapshot", () => {
  const wrapper = mount(MdiHamburgerPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
