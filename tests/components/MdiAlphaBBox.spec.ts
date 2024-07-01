
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaBBox from "../../src/components/MdiAlphaBBox.vue";

test("MdiAlphaBBox snapshot", () => {
  const wrapper = mount(MdiAlphaBBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
