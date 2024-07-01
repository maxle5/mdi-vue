
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScrewMachineRoundTop from "../../src/components/MdiScrewMachineRoundTop.vue";

test("MdiScrewMachineRoundTop snapshot", () => {
  const wrapper = mount(MdiScrewMachineRoundTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
