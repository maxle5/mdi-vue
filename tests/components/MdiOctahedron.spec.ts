
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctahedron from "../../src/components/MdiOctahedron.vue";

test("MdiOctahedron snapshot", () => {
  const wrapper = mount(MdiOctahedron, {});
  expect(wrapper.html()).toMatchSnapshot();
});
