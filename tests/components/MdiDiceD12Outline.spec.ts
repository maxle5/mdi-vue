
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD12Outline from "../../src/components/MdiDiceD12Outline.vue";

test("MdiDiceD12Outline snapshot", () => {
  const wrapper = mount(MdiDiceD12Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
