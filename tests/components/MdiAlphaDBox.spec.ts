
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaDBox from "../../src/components/MdiAlphaDBox.vue";

test("MdiAlphaDBox snapshot", () => {
  const wrapper = mount(MdiAlphaDBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
