
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice1Outline from "../../src/components/MdiDice1Outline.vue";

test("MdiDice1Outline snapshot", () => {
  const wrapper = mount(MdiDice1Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
