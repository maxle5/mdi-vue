
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice4Outline from "../../src/components/MdiDice4Outline.vue";

test("MdiDice4Outline snapshot", () => {
  const wrapper = mount(MdiDice4Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
