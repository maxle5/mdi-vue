
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaCCircleOutline from "../../src/components/MdiAlphaCCircleOutline.vue";

test("MdiAlphaCCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaCCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
