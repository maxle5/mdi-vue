
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaBCircle from "../../src/components/MdiAlphaBCircle.vue";

test("MdiAlphaBCircle snapshot", () => {
  const wrapper = mount(MdiAlphaBCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
