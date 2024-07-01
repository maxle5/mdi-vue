
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaZBox from "../../src/components/MdiAlphaZBox.vue";

test("MdiAlphaZBox snapshot", () => {
  const wrapper = mount(MdiAlphaZBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
