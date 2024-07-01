
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD20Outline from "../../src/components/MdiDiceD20Outline.vue";

test("MdiDiceD20Outline snapshot", () => {
  const wrapper = mount(MdiDiceD20Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
