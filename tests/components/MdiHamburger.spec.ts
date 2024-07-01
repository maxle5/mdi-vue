
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHamburger from "../../src/components/MdiHamburger.vue";

test("MdiHamburger snapshot", () => {
  const wrapper = mount(MdiHamburger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
