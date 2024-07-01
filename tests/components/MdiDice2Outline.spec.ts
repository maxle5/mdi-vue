
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice2Outline from "../../src/components/MdiDice2Outline.vue";

test("MdiDice2Outline snapshot", () => {
  const wrapper = mount(MdiDice2Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
