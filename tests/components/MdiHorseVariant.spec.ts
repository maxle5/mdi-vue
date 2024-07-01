
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHorseVariant from "../../src/components/MdiHorseVariant.vue";

test("MdiHorseVariant snapshot", () => {
  const wrapper = mount(MdiHorseVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
