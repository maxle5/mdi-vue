
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHammerScrewdriver from "../../src/components/MdiHammerScrewdriver.vue";

test("MdiHammerScrewdriver snapshot", () => {
  const wrapper = mount(MdiHammerScrewdriver, {});
  expect(wrapper.html()).toMatchSnapshot();
});
