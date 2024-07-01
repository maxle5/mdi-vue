
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice5Outline from "../../src/components/MdiDice5Outline.vue";

test("MdiDice5Outline snapshot", () => {
  const wrapper = mount(MdiDice5Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
