
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTowTruck from "../../src/components/MdiTowTruck.vue";

test("MdiTowTruck snapshot", () => {
  const wrapper = mount(MdiTowTruck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
