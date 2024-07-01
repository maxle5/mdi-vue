
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice3Outline from "../../src/components/MdiDice3Outline.vue";

test("MdiDice3Outline snapshot", () => {
  const wrapper = mount(MdiDice3Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
