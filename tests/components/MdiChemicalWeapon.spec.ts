
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChemicalWeapon from "../../src/components/MdiChemicalWeapon.vue";

test("MdiChemicalWeapon snapshot", () => {
  const wrapper = mount(MdiChemicalWeapon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
