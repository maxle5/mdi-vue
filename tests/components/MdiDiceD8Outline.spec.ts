
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD8Outline from "../../src/components/MdiDiceD8Outline.vue";

test("MdiDiceD8Outline snapshot", () => {
  const wrapper = mount(MdiDiceD8Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
