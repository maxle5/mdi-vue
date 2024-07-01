
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSim from "../../src/components/MdiSim.vue";

test("MdiSim snapshot", () => {
  const wrapper = mount(MdiSim, {});
  expect(wrapper.html()).toMatchSnapshot();
});
