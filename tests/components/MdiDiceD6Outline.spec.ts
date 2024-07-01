
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD6Outline from "../../src/components/MdiDiceD6Outline.vue";

test("MdiDiceD6Outline snapshot", () => {
  const wrapper = mount(MdiDiceD6Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
