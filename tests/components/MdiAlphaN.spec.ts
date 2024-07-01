
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaN from "../../src/components/MdiAlphaN.vue";

test("MdiAlphaN snapshot", () => {
  const wrapper = mount(MdiAlphaN, {});
  expect(wrapper.html()).toMatchSnapshot();
});
