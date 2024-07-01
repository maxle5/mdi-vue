
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaSCircle from "../../src/components/MdiAlphaSCircle.vue";

test("MdiAlphaSCircle snapshot", () => {
  const wrapper = mount(MdiAlphaSCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
