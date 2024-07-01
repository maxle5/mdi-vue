
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMolecule from "../../src/components/MdiMolecule.vue";

test("MdiMolecule snapshot", () => {
  const wrapper = mount(MdiMolecule, {});
  expect(wrapper.html()).toMatchSnapshot();
});
