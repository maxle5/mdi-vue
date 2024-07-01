
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD10Outline from "../../src/components/MdiDiceD10Outline.vue";

test("MdiDiceD10Outline snapshot", () => {
  const wrapper = mount(MdiDiceD10Outline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
