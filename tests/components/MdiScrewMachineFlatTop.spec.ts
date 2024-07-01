
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScrewMachineFlatTop from "../../src/components/MdiScrewMachineFlatTop.vue";

test("MdiScrewMachineFlatTop snapshot", () => {
  const wrapper = mount(MdiScrewMachineFlatTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
