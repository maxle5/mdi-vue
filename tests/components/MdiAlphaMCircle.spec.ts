
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaMCircle from "../../src/components/MdiAlphaMCircle.vue";

test("MdiAlphaMCircle snapshot", () => {
  const wrapper = mount(MdiAlphaMCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
