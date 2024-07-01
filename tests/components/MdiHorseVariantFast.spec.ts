
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHorseVariantFast from "../../src/components/MdiHorseVariantFast.vue";

test("MdiHorseVariantFast snapshot", () => {
  const wrapper = mount(MdiHorseVariantFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
