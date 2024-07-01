
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaCBox from "../../src/components/MdiAlphaCBox.vue";

test("MdiAlphaCBox snapshot", () => {
  const wrapper = mount(MdiAlphaCBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
