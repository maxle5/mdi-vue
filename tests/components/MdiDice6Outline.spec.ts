
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice6Outline from "../../src/components/MdiDice6Outline.vue";

test("MdiDice6Outline snapshot", () => {
  const wrapper = mount(MdiDice6Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
