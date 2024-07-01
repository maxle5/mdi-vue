
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBowTie from "../../src/components/MdiBowTie.vue";

test("MdiBowTie snapshot", () => {
  const wrapper = mount(MdiBowTie, {});
  expect(wrapper.html()).toMatchSnapshot();
});
