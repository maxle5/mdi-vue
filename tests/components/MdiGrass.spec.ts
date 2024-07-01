
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGrass from "../../src/components/MdiGrass.vue";

test("MdiGrass snapshot", () => {
  const wrapper = mount(MdiGrass, {});
  expect(wrapper.html()).toMatchSnapshot();
});
