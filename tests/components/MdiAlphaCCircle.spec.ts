
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaCCircle from "../../src/components/MdiAlphaCCircle.vue";

test("MdiAlphaCCircle snapshot", () => {
  const wrapper = mount(MdiAlphaCCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
