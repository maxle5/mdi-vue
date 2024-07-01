
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD4Outline from "../../src/components/MdiDiceD4Outline.vue";

test("MdiDiceD4Outline snapshot", () => {
  const wrapper = mount(MdiDiceD4Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
