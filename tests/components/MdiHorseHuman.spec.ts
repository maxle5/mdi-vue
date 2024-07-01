
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHorseHuman from "../../src/components/MdiHorseHuman.vue";

test("MdiHorseHuman snapshot", () => {
  const wrapper = mount(MdiHorseHuman, {});
  expect(wrapper.html()).toMatchSnapshot();
});
