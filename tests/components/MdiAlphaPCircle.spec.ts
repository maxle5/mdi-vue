
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaPCircle from "../../src/components/MdiAlphaPCircle.vue";

test("MdiAlphaPCircle snapshot", () => {
  const wrapper = mount(MdiAlphaPCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
