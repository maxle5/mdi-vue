
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScrewdriver from "../../src/components/MdiScrewdriver.vue";

test("MdiScrewdriver snapshot", () => {
  const wrapper = mount(MdiScrewdriver, {});
  expect(wrapper.html()).toMatchSnapshot();
});
