
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanPregnant from "../../src/components/MdiHumanPregnant.vue";

test("MdiHumanPregnant snapshot", () => {
  const wrapper = mount(MdiHumanPregnant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
