
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanHandsup from "../../src/components/MdiHumanHandsup.vue";

test("MdiHumanHandsup snapshot", () => {
  const wrapper = mount(MdiHumanHandsup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
